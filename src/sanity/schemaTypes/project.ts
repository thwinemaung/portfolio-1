import type { SchemaTypeDefinition } from 'sanity'

const project: SchemaTypeDefinition = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'kind',
      title: 'Kind',
      type: 'string',
      options: {
        list: ['personal', 'freelance'],
        layout: 'radio',
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['Backend', 'DevOps', 'Full-stack', 'Tooling'],
      },
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
    },
    {
      name: 'client',
      title: 'Client',
      type: 'string',
      description: 'Leave empty for personal projects with no client.',
    },
    {
      // Free text, not type 'url': mock values include bare hosts
      // ('github.com/alex/queue') and the sentinel 'private'.
      name: 'url',
      title: 'URL',
      type: 'string',
    },
    {
      name: 'outcomes',
      title: 'Outcomes',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}

export default project
