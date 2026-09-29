export type ProjectVisual = 'gateway' | 'beacon' | 'ccode';

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
    type: 'Application',
    description:
      'An enterprise AI workspace where teams can bring together persistent context, organizational knowledge, tools, workflows, and assistants.',
    href: 'https://beacon.conscialabs.com',
    visual: 'beacon',
  },
  {
    name: 'C>Code',
    category: 'Artificial Intelligence',
    type: 'Engineering Tool',
    description:
      'An AI-native engineering environment for infrastructure, networking, cloud, and security engineers.',
    href: 'https://ccode.conscialabs.com',
    visual: 'ccode',
  },
];
