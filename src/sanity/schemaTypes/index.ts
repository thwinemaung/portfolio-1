import { type SchemaTypeDefinition } from 'sanity'

import certification from './certification'
import education from './education'
import experience from './experience'
import profile from './profile'
import project from './project'

export const schemaTypes: SchemaTypeDefinition[] = [
  project,
  experience,
  education,
  certification,
  profile,
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}
