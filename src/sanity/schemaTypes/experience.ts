import type { SchemaTypeDefinition } from 'sanity'

const experience: SchemaTypeDefinition = {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    },
    {
      name: 'current',
      title: 'Current',
      type: 'boolean',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'tech',
      title: 'Tech',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}

export default experience
