import type { SchemaTypeDefinition } from 'sanity'

const education: SchemaTypeDefinition = {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'degree',
      title: 'Degree',
      type: 'string',
    },
    {
      name: 'school',
      title: 'School',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'text',
    },
  ],
}

export default education
