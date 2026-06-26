import type { SchemaTypeDefinition } from 'sanity'

// Singleton: enforced via the desk structure (not this file) so only one
// 'profile' document can ever be created/listed in the Studio.
const profile: SchemaTypeDefinition = {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'skillGroup',
          title: 'Skill Group',
          fields: [
            {
              name: 'cat',
              title: 'Category',
              type: 'string',
            },
            {
              name: 'tags',
              title: 'Tags',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'social',
          title: 'Social',
          fields: [
            {
              name: 'id',
              title: 'ID',
              type: 'string',
              description: "e.g. 'github', 'linkedin', 'twitter', 'email'.",
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'href',
              title: 'Href',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'contactLinks',
      title: 'Contact Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'contactLink',
          title: 'Contact Link',
          fields: [
            {
              name: 'id',
              title: 'ID',
              type: 'string',
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
            },
            {
              name: 'href',
              title: 'Href',
              type: 'string',
            },
            {
              name: 'note',
              title: 'Note',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}

export default profile
