import { drizzle } from "drizzle-orm/d1";

// Import schemas from individual files
import * as userSchema from "./schema/user";
import * as recipesSchema from "./schema/recipes";
import * as paymentsSchema from "./schema/payments";

// Merge all schemas into a single schema object
const schema = {
  ...userSchema,
  ...recipesSchema,
  ...paymentsSchema,
};

export const db = drizzle(process.env.DATABASE, { schema, logger: true }, );
