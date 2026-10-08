import { BrainCircuit, Sparkles, TrendingDown } from 'lucide-react';
import { FeatureCard } from '@/components/ui/Card';
import { Section, SectionIntro } from '@/components/ui/Section';

const features = [
  {
    icon: BrainCircuit,
    title: 'Autonomous dead stock & ghost inventory audit',
    description:
      'Powered by Claude: automated reasoning over catalog inconsistencies and missing context that standard rules miss.',
  },
  {
    icon: TrendingDown,
    title: 'Dynamic liquidation & markdown strategist',
    description:
      'Analyze velocity, margins, and trends to recommend the right markdown path and disposal channel before value slips away.',
  },
  {
    icon: Sparkles,
    title: 'Smart bundle & campaign copy generator',
    description:
      'Create high-converting listings, draft email hooks, and promotion language that turns stagnant inventory into action.',
  },
];

const ClaudeFeatureSection = () => {
  return (
    <Section id="ai-operations" tone="raised">
      <SectionIntro
        eyebrow="AI operations"
        title="AI-driven inventory intelligence"
        lede="Leverage Claude to transform stagnant stock into liquid capital with a clear view of the next action, the risk, and the value at stake."
      />

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <FeatureCard key={title} icon={<Icon className="h-5 w-5" />} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </Section>
  );
};

export default ClaudeFeatureSection;