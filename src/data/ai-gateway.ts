export type GatewayItem = {
  number: string;
  title: string;
  description: string;
  accent: string;
};

export const aiGatewayCapabilities: GatewayItem[] = [
  {
    number: '01',
    title: 'One governed access layer',
    description: 'Give developers, engineers, and employees a consistent way to access approved models without every team building its own integration.',
    accent: '#aeb6ef',
  },
  {
    number: '02',
    title: 'Models across providers',
    description: 'Expose models from AWS Bedrock, OpenAI, Anthropic, Google, and Conscia’s own model portfolio through one enterprise gateway.',
    accent: '#8ed4df',
  },
  {
    number: '03',
    title: 'Security embedded in the path',
    description: 'Make secure model access part of the platform itself, with organizational controls around how AI is accessed and used.',
    accent: '#a3d6cf',
  },
  {
    number: '04',
    title: 'Usage, limits, and billing',
    description: 'Track usage, enforce allowances, and give organizations the visibility needed to manage demand and cost.',
    accent: '#ffd083',
  },
  {
    number: '05',
    title: 'Self-service with guidance',
    description: 'Help people move from credentials to a successful request with guided setup, a sandbox, quickstart paths, and production-ready examples.',
    accent: '#7c86df',
  },
];

export const aiGatewayDifferentiators: GatewayItem[] = [
  {
    number: 'A',
    title: 'Governance by default',
    description: 'AI Gateway is designed around organizational access and accountability, not just making an API call possible.',
    accent: '#aeb6ef',
  },
  {
    number: 'B',
    title: 'Built for the whole organization',
    description: 'The same platform supports experienced engineers, developers building integrations, and employees experimenting with AI.',
    accent: '#a3d6cf',
  },
  {
    number: 'C',
    title: 'A better path from trial to practice',
    description: 'Self-service onboarding, sandbox access, usage feedback, and guided assistance make experimentation easier to govern and easier to scale.',
    accent: '#8ed4df',
  },
];
