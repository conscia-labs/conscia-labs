export type FocusArea = {
  number: string;
  name: string;
  description: string;
  accent: string;
  href?: string;
};

export const focusAreas: FocusArea[] = [
  {
    number: '01',
    name: 'Artificial Intelligence',
    description: 'Building AI that fits the way teams actually work.',
    accent: 'var(--accent-bright)',
    href: '/focus-areas/artificial-intelligence',
  },
  {
    number: '02',
    name: 'Networking',
    description: 'We work on faster networks that are simpler to run.',
    accent: 'var(--accent-info)',
  },
  {
    number: '03',
    name: 'Security',
    description: 'Putting clear trust boundaries around the systems people rely on.',
    accent: 'var(--accent-secondary)',
  },
  {
    number: '04',
    name: 'Automation',
    description: 'Reliable automation for the repeatable jobs, so people can focus on the decisions.',
    accent: 'var(--highlight-accent)',
  },
  {
    number: '05',
    name: 'Research',
    description: 'Good questions are worth testing. We build prototypes and see what the evidence says.',
    accent: 'var(--accent-bright)',
  },
];
