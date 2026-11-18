export type GatewayItem = {
  number: string;
  title: string;
  description: string;
  accent: string;
};

export const aiGatewayCapabilities: GatewayItem[] = [
  {
    number: '01',
    title: 'Governed organizational access',
    description: 'Give applications and people access to approved models through organizational policies and Conscia-issued credentials, without distributing upstream provider keys.',
    accent: 'var(--accent-bright)',
  },
  {
    number: '02',
    title: 'Model selection and routing',
    description: 'Request an approved model explicitly or use automatic selection within the organization’s allowed models and routing rules. Availability depends on enabled, qualified routes.',
    accent: 'var(--accent-info)',
  },
  {
    number: '03',
    title: 'Baseline gateway safeguards',
    description: 'Apply request validation, bounded resource use, tenant and credential isolation, and safe handling of errors and logs. These safeguards are distinct from optional content inspection.',
    accent: 'var(--accent-secondary)',
  },
  {
    number: '04',
    title: 'Usage, limits, and cost',
    description: 'Apply rate limits, quotas, and budgets while attributing model usage and cost to the organization and caller. Usage and audit records make the decisions easier to understand.',
    accent: 'var(--highlight-accent)',
  },
  {
    number: '05',
    title: 'A practical developer starting point',
    description: 'Create a key, discover models you can use, test a request in the Sandbox, and use quickstarts to build an integration. Review personal usage and limits in the Developer Portal.',
    accent: 'var(--accent-bright)',
  },
  {
    number: '06',
    title: 'Hosted MCP servers',
    description: 'Connect MCP-capable clients to hosted tool services such as WebSearch. The Model Context Protocol provides a tool-service interface separate from the model inference API.',
    accent: 'var(--accent-info)',
  },
];

export const aiGatewayDifferentiators: GatewayItem[] = [
  {
    number: 'A',
    title: 'Access and accountability together',
    description: 'Bring model access, routing decisions, usage, and cost attribution into one infrastructure layer rather than treating each provider integration separately.',
    accent: 'var(--accent-bright)',
  },
  {
    number: 'B',
    title: 'Clear administrative boundaries',
    description: 'Platform administrators manage providers and the catalog. Organization administrators manage access and limits. Developers work with keys, allowed models, and their own usage.',
    accent: 'var(--accent-secondary)',
  },
  {
    number: 'C',
    title: 'Infrastructure behind the experience',
    description: 'Products such as Beacon can use Gateway for governed model access while keeping their own conversations, context, tools, and working experience.',
    accent: 'var(--accent-info)',
  },
];
