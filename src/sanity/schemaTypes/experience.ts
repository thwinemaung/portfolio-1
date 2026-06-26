import type { SchemaTypeDefinition } from 'sanity'

const experience: SchemaTypeDefinition = {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'period',
      title: 'Period',
      type: 'string',
      description: "Free text, e.g. '2022 – Present' or 'Summer 2018'.",
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'bullets',
      title: 'Bullets',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'stack',
      title: 'Stack',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'team',
      title: 'Team',
      type: 'string',
    },
  ],
}

export default experience
