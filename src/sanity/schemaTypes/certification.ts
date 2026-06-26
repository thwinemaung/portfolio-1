import type { SchemaTypeDefinition } from 'sanity'

const certification: SchemaTypeDefinition = {
  name: 'certification',
  title: 'Certification',
  type: 'document',
  fields: [
    {
      name: 'badge',
      title: 'Badge',
      type: 'string',
      description: "Short badge code, e.g. 'AWS', 'CKA'.",
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'issuer',
      title: 'Issuer',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
  ],
}

export default certification
