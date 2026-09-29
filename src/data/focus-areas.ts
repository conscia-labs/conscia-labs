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
    accent: '#aeb6ef',
    href: '/focus-areas/artificial-intelligence',
  },
  {
    number: '02',
    name: 'Networking',
    description: 'Making connected systems faster, simpler, and easier to keep running.',
    accent: '#8ed4df',
  },
  {
    number: '03',
    name: 'Security',
    description: 'Putting clear trust boundaries around the systems people rely on.',
    accent: '#a3d6cf',
  },
  {
    number: '04',
    name: 'Automation',
    description: 'Turning repeatable work into reliable systems that leave people time for judgment.',
    accent: '#ffd083',
  },
  {
    number: '05',
    name: 'Research',
    description: 'Following good questions through evidence, prototypes, and practice.',
    accent: '#7c86df',
  },
];
