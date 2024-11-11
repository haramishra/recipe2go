import { sql } from "drizzle-orm";
import {
  text,
  integer,
  sqliteTable,
} from "drizzle-orm/sqlite-core";

// Recipe cards table - for displaying in the UI
export const recipeCards = sqliteTable("recipe_cards", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  user_id: text("user_id"), // If you need user association
  name: text("name").notNull(),
  description: text("description"),
  image: text("image"),
  source_url: text("source_url"),
  created_at: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  recipe_id: text("recipe_id").notNull(), // Reference to the full recipe
});

// Recipes table - stores the full recipe data
export const recipes = sqliteTable("recipes", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  recipe_data: text("recipe_data").notNull(), // JSON string of the full recipe
  created_at: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updated_at: integer("updated_at", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

