/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_ID: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
