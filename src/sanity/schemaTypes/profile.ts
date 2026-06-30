import type { SchemaTypeDefinition } from 'sanity'

// Singleton: enforced via the desk structure (not this file) so only one
// 'profile' document can ever be created/listed in the Studio.
const profile: SchemaTypeDefinition = {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: "e.g. 'Software Engineer'.",
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'language',
          title: 'Language',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'level',
              title: 'Level',
              type: 'string',
              description: "e.g. 'Native', 'Full Professional'.",
            },
          ],
        },
      ],
    },
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
