import { type SchemaTypeDefinition } from 'sanity';
import { projectType } from './project';
import { experienceType } from './experience';
import { cvType } from './cv';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, experienceType, cvType],
};
