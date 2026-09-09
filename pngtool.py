"""Temporary: inspect and crop logo.png so the mark can be traced.

Pillow is not installed, so this decodes the PNG with the standard library.
Reports transparency and the dominant hue families, then writes a crop of the
mark plus a coarse column/row profile that pins down the geometry.
"""

import collections
import struct
import sys
import zlib

SRC = "logo.png"
DST = "crop-mark.png"


def decode(path):
    raw = open(path, "rb").read()
    assert raw[:8] == b"\x89PNG\r\n\x1a\n", "not a PNG"

    idat = bytearray()
    pos = 8
    width = height = depth = color = None

    while pos < len(raw):
        (length,) = struct.unpack(">I", raw[pos : pos + 4])
        kind = raw[pos + 4 : pos + 8]
        body = raw[pos + 8 : pos + 8 + length]
        pos += 12 + length

        if kind == b"IHDR":
            width, height, depth, color = struct.unpack(">IIBB", body[:10])
        elif kind == b"IDAT":
            idat += body
        elif kind == b"IEND":
            break

    print(f"{width}x{height} depth={depth} color_type={color}")
    if depth != 8 or color not in (2, 6):
        sys.exit(f"unsupported: depth={depth} color_type={color}")

    bpp = 4 if color == 6 else 3
    stride = width * bpp
    data = zlib.decompress(bytes(idat))
    rows, prev, offset = [], bytearray(stride), 0

    for _ in range(height):
        ft = data[offset]
        offset += 1
        line = bytearray(data[offset : offset + stride])
        offset += stride

        for i in range(stride):
            a = line[i - bpp] if i >= bpp else 0
            b = prev[i]
            c = prev[i - bpp] if i >= bpp else 0
            if ft == 1:
                line[i] = (line[i] + a) & 0xFF
            elif ft == 2:
                line[i] = (line[i] + b) & 0xFF
            elif ft == 3:
                line[i] = (line[i] + (a + b) // 2) & 0xFF
            elif ft == 4:
                p = a + b - c
                pa, pb, pc = abs(p - a), abs(p - b), abs(p - c)
                pred = a if (pa <= pb and pa <= pc) else (b if pb <= pc else c)
                line[i] = (line[i] + pred) & 0xFF

        rows.append(line)
        prev = line

    return width, height, bpp, rows


def chunk(kind, body):
    return (
        struct.pack(">I", len(body))
        + kind
        + body
        + struct.pack(">I", zlib.crc32(kind + body) & 0xFFFFFFFF)
    )


def encode(path, width, height, rows_rgba):
    raw = b"".join(b"\x00" + bytes(r) for r in rows_rgba)
    out = b"\x89PNG\r\n\x1a\n"
    out += chunk(b"IHDR", struct.pack(">IIBBBBB", width, height, 8, 6, 0, 0, 0))
    out += chunk(b"IDAT", zlib.compress(raw, 9))
    out += chunk(b"IEND", b"")
    open(path, "wb").write(out)


W, H, BPP, ROWS = decode(SRC)


def px(x, y):
    o = x * BPP
    r, g, b = ROWS[y][o], ROWS[y][o + 1], ROWS[y][o + 2]
    a = ROWS[y][o + 3] if BPP == 4 else 255
    return r, g, b, a


# --- transparency -----------------------------------------------------------
if BPP == 4:
    alphas = collections.Counter(px(x, y)[3] for y in range(0, H, 4) for x in range(0, W, 4))
    print("alpha values:", sorted(alphas)[:3], "...", sorted(alphas)[-3:])
else:
    print("no alpha channel at all (color_type 2)")

# --- colour families --------------------------------------------------------
navy = collections.Counter()
gold = collections.Counter()

for y in range(0, H, 2):
    for x in range(0, W, 2):
        r, g, b, a = px(x, y)
        if a < 240 or max(r, g, b) - min(r, g, b) <= 40:
            continue
        (navy if b > r else gold)[(r, g, b)] += 1

for name, c in (("NAVY", navy), ("GOLD", gold)):
    n = sum(c.values())
    if not n:
        continue
    avg = tuple(round(sum(p[i] * k for p, k in c.items()) / n) for i in range(3))
    top = c.most_common(1)[0]
    print(f"{name}: mean #{avg[0]:02X}{avg[1]:02X}{avg[2]:02X}  "
          f"mode #{top[0][0]:02X}{top[0][1]:02X}{top[0][2]:02X}  ({n:,} px sampled)")

# --- where is the navy hexagon? --------------------------------------------
def is_navy(p):
    r, g, b, a = p
    return a > 240 and b > r + 30 and b < 160


def is_gold(p):
    r, g, b, a = p
    return a > 240 and r > 150 and r - b > 60 and g > b


def is_pale(p):
    """The pot: much lighter than navy, and inside the mark's bounding box."""
    r, g, b, a = p
    return a > 240 and min(r, g, b) > 195


MARK_TOP, MARK_BOT = 150, 1180  # mark only; the wordmark starts below this

xs = [x for x in range(W) if any(is_navy(px(x, y)) for y in range(MARK_TOP, MARK_BOT, 3))]
ys = [y for y in range(MARK_TOP, MARK_BOT) if any(is_navy(px(x, y)) for x in range(0, W, 3))]
HX0, HX1, HY0, HY1 = xs[0], xs[-1], ys[0], ys[-1]
print(f"\nhexagon bbox : x {HX0}..{HX1} (w {HX1 - HX0})  y {HY0}..{HY1} (h {HY1 - HY0})")
print(f"aspect h/w   : {(HY1 - HY0) / (HX1 - HX0):.4f}  (regular pointy-top = 1.1547)")


def span(pred, y):
    hits = [x for x in range(HX0 - 40, HX1 + 60) if pred(px(x, y))]
    return (hits[0], hits[-1]) if hits else None


print("\nnavy x-span by row (hexagon edges):")
for f in (0.0, 0.08, 0.16, 0.25, 0.5, 0.75, 0.84, 0.92, 1.0):
    y = round(HY0 + f * (HY1 - HY0))
    print(f"  y={y:>4} (f={f:.2f})  {span(is_navy, y)}")

gxs = [x for x in range(W) if any(is_gold(px(x, y)) for y in range(MARK_TOP, MARK_BOT, 2))]
gys = [y for y in range(MARK_TOP, MARK_BOT) if any(is_gold(px(x, y)) for x in range(0, W, 2))]
print(f"\ngold arrow bbox: x {gxs[0]}..{gxs[-1]}  y {gys[0]}..{gys[-1]}")

# The arrow tip is the gold pixel furthest along the up-right diagonal.
tip = max(
    ((x, y) for y in range(MARK_TOP, MARK_BOT) for x in range(gxs[0], gxs[-1] + 1)
     if is_gold(px(x, y))),
    key=lambda p: p[0] - p[1],
)
print(f"arrow tip      : {tip}")


def pale_runs(y):
    """Pale runs strictly inside the navy hexagon on this row: the pot."""
    nav = span(is_navy, y)
    if not nav:
        return []
    runs, start = [], None
    for x in range(nav[0], nav[1] + 1):
        p = is_pale(px(x, y))
        if p and start is None:
            start = x
        elif not p and start is not None:
            if x - start > 6:
                runs.append((start, x - 1))
            start = None
    return runs


STEP = 18
print(f"\npixel map  '#'=navy  '.'=pot  'G'=gold  ' '=outside   step={STEP}px")
print("     " + "".join(str((HX0 + c * STEP) // 100 % 10) for c in range((HX1 - HX0) // STEP + 1)))
for y in range(HY0, HY1 + 1, STEP):
    line = ""
    for x in range(HX0, HX1 + 1, STEP):
        p = px(x, y)
        if is_gold(p):
            line += "G"
        elif is_navy(p):
            line += "#"
        elif is_pale(p):
            line += "."
        else:
            line += "?"
    print(f"{y:>4} {line}")

# --- crop -------------------------------------------------------------------
L, T = max(0, HX0 - 30), max(0, HY0 - 30)
R, B = min(W, gxs[-1] + 30), min(H, HY1 + 30)
out = []
for y in range(T, B):
    line = bytearray()
    for x in range(L, R):
        r, g, b, a = px(x, y)
        line += bytes((r, g, b, 255))
    out.append(line)
encode(DST, R - L, B - T, out)
print(f"\nwrote {DST}  {R - L}x{B - T}  (origin {L},{T})")
