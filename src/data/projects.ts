export type ProjectVisual = 'gateway' | 'beacon';

export type Project = {
  name: string;
  category: string;
  type: string;
  description: string;
  href: string;
  externalHref?: string;
  visual: ProjectVisual;
};

export const projects: Project[] = [
  {
    name: 'AI Gateway',
    category: 'Artificial Intelligence',
    type: 'Platform',
    description:
      'Access approved AI models in one place. Manage who can use them, track usage and cost, and set limits. Hosted MCP tools such as WebSearch sit alongside the model API.',
    href: '/projects/ai-gateway',
    externalHref: 'https://console.ai.conscialabs.com',
    visual: 'gateway',
  },
  {
    name: 'Beacon',
    category: 'Artificial Intelligence',
    type: 'Ecosystem',
    description:
      'AI for Conscia colleagues. Beacon Work runs on the desktop, Beacon Code in the terminal. Beacon Cloud supports both.',
    href: '/projects/beacon',
    externalHref: 'https://beacon.conscialabs.com',
    visual: 'beacon',
  },
];
