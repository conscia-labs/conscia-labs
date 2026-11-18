export type GatewayItem = {
  number: string;
  title: string;
  description: string;
  accent: string;
};

export const aiGatewayCapabilities: GatewayItem[] = [
  {
    number: '01',
    title: 'Access for people and applications',
    description: 'Decide who can use which models through organizational policies. People and applications use Conscia-issued credentials, not the providers’ keys.',
    accent: 'var(--accent-bright)',
  },
  {
    number: '02',
    title: 'Choosing a model',
    description: 'Ask for an approved model, or let Gateway choose one using your organization’s routing rules. The model and route must be enabled and qualified for the request.',
    accent: 'var(--accent-info)',
  },
  {
    number: '03',
    title: 'Checks on every request',
    description: 'Request checks and resource limits protect the shared gateway. Organizations and credentials are kept separate, with safe handling of errors and logs. This isn’t the same as inspecting content.',
    accent: 'var(--accent-secondary)',
  },
  {
    number: '04',
    title: 'Usage, limits, and cost',
    description: 'Set rate limits, quotas, and budgets. See which organization and caller used a model, what it cost, and the decisions recorded in usage and audit logs.',
    accent: 'var(--highlight-accent)',
  },
  {
    number: '05',
    title: 'Get a first request working',
    description: 'Create a key and find a model you can access. Try it in the Sandbox and follow a quickstart. Your usage and limits are in the Developer Portal, too.',
    accent: 'var(--accent-bright)',
  },
  {
    number: '06',
    title: 'Hosted MCP servers',
    description: 'Use tools such as WebSearch from a client that supports the Model Context Protocol (MCP). These hosted services use a separate interface from the model API.',
    accent: 'var(--accent-info)',
  },
];

export const aiGatewayDifferentiators: GatewayItem[] = [
  {
    number: 'A',
    title: 'Know who used which model',
    description: 'Keep access, routing, usage, and cost records in one place, rather than piece them together across separate provider integrations.',
    accent: 'var(--accent-bright)',
  },
  {
    number: 'B',
    title: 'A view for each role',
    description: 'Platform admins manage providers and the catalog. Organization admins handle access and limits. Developers get keys, models, and their own usage view.',
    accent: 'var(--accent-secondary)',
  },
  {
    number: 'C',
    title: 'Built for other products to use',
    description: 'Beacon and other clients can use Gateway for model access. They provide their own conversations, context, tools, and interface.',
    accent: 'var(--accent-info)',
  },
];
