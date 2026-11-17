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
      'A multi-tenant AI platform that gives organizations one controlled route to models from several providers, with routing, policy, security, observability, usage, and cost controls.',
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
