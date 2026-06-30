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
    {
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: "Bullet points, e.g. CGPA, capstone project, coursework.",
    },
  ],
}

export default education
