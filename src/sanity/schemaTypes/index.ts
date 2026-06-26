import { type SchemaTypeDefinition } from 'sanity'

import experience from './experience'
import profile from './profile'
import project from './project'

export const schemaTypes: SchemaTypeDefinition[] = [project, experience, profile]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}
