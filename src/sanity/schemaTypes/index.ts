import { type SchemaTypeDefinition } from 'sanity';
import ProductSchema from './product';
import orderSchema from './order';
import customerSchema from './customer';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ProductSchema ,orderSchema, customerSchema],
};
