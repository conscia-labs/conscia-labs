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
    description: 'Building useful intelligence with the controls and context real teams need.',
    accent: '#aeb6ef',
    href: '/focus-areas/artificial-intelligence',
  },
  {
    number: '02',
    name: 'Networking',
    description: 'Exploring how connected systems can be faster, simpler, and more resilient.',
    accent: '#8ed4df',
  },
  {
    number: '03',
    name: 'Security',
    description: 'Designing trust into the systems, interfaces, and infrastructure people depend on.',
    accent: '#a3d6cf',
  },
  {
    number: '04',
    name: 'Automation',
    description: 'Turning repeatable work into dependable systems that give teams room to think.',
    accent: '#ffd083',
  },
  {
    number: '05',
    name: 'Research',
    description: 'Following meaningful questions until they become evidence, prototypes, or practice.',
    accent: '#7c86df',
  },
];
