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
      'Governed access to approved AI models, with organizational policies, routing, usage limits, cost visibility, and hosted MCP tools such as WebSearch.',
    href: '/projects/ai-gateway',
    externalHref: 'https://console.ai.conscialabs.com',
    visual: 'gateway',
  },
  {
    name: 'Beacon',
    category: 'Artificial Intelligence',
    type: 'Ecosystem',
    description:
      'Conscia’s internal AI ecosystem for productivity and engineering: Beacon Work on the desktop, Beacon Code in the terminal, and supporting capabilities in Beacon Cloud.',
    href: '/projects/beacon',
    externalHref: 'https://beacon.conscialabs.com',
    visual: 'beacon',
  },
];
