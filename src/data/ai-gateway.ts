export type GatewayItem = {
  number: string;
  title: string;
  description: string;
  accent: string;
};

export const aiGatewayCapabilities: GatewayItem[] = [
  {
    number: '01',
    title: 'One access layer for the organization',
    description: 'Give developers, engineers, and employees one consistent way to use approved models instead of having each team build its own integration.',
    accent: '#aeb6ef',
  },
  {
    number: '02',
    title: 'Models from several providers',
    description: 'Make models from AWS Bedrock, OpenAI, Anthropic, Google, and Conscia’s own portfolio available through one enterprise gateway.',
    accent: '#8ed4df',
  },
  {
    number: '03',
    title: 'Security in the request path',
    description: 'Put access controls in the platform itself, with clear rules for how AI can be used.',
    accent: '#a3d6cf',
  },
  {
    number: '04',
    title: 'Usage, limits, and cost',
    description: 'Track requests, enforce limits, and give organizations the visibility they need to manage demand and cost.',
    accent: '#ffd083',
  },
  {
    number: '05',
    title: 'A guided first request',
    description: 'Help people make a working request with guided setup, a sandbox, quickstarts, and production-ready examples.',
    accent: '#7c86df',
  },
];

export const aiGatewayDifferentiators: GatewayItem[] = [
  {
    number: 'A',
    title: 'Access and accountability by default',
    description: 'Start with who can use which model and how that use is tracked; the API call is only one part of the job.',
    accent: '#aeb6ef',
  },
  {
    number: 'B',
    title: 'For developers and day-to-day users',
    description: 'Engineers can build integrations while employees experiment with AI in the same platform.',
    accent: '#a3d6cf',
  },
  {
    number: 'C',
    title: 'A clear route to regular use',
    description: 'Self-service setup, sandbox access, usage feedback, and guidance let teams test an idea before they take it into regular use.',
    accent: '#8ed4df',
  },
];
