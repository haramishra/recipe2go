import {
  integer,
  sqliteTable,
  text,
  primaryKey,
  real,
} from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";
import { users } from "./user";

// Subscription Plans
export const subscription_plans = sqliteTable("subscription_plan", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(), // 'Starter', 'Chef's Choice', 'Gourmet', 'Business'
  price: real("price").notNull(), // e.g., 0, 9.99, 19.99, 99.99
  billing_period: integer("billing_period").notNull(), // in days, e.g., 30, 365
  recipe_limit: integer("recipe_limit"), // null for unlimited
  platforms: text("platforms").notNull(), // JSON string of platform names
  video_duration_limit: integer("video_duration_limit"), // in minutes, e.g., 10
  has_watermark: integer("has_watermark", { mode: "boolean" }).notNull(),
  has_premium_templates: integer("has_premium_templates", {
    mode: "boolean",
  }).notNull(),
  created_at: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updated_at: integer("updated_at", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

// User Subscriptions
export const user_subscriptions = sqliteTable("user_subscription", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  user_id: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  plan_id: text("plan_id")
    .notNull()
    .references(() => subscription_plans.id),
  status: text("status").notNull(), // 'active', 'cancelled', 'past_due', 'expired'
  start_date: integer("start_date", { mode: "timestamp_ms" }).notNull(),
  end_date: integer("end_date", { mode: "timestamp_ms" }).notNull(),
  auto_renew: integer("auto_renew", { mode: "boolean" }).default(true),
  cancel_at_period_end: integer("cancel_at_period_end", { mode: "boolean" })
    .notNull()
    .default(false),
  status_updated_at: integer("status_updated_at", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  created_at: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updated_at: integer("updated_at", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

// Extra Recipe Packs
export const extra_recipe_packs = sqliteTable("extra_recipe_pack", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  user_subscription_id: text("user_subscription_id")
    .notNull()
    .references(() => user_subscriptions.id, { onDelete: "cascade" }),
  quantity: integer("quantity").notNull(), // number of 100-recipe packs
  created_at: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  expires_at: integer("expires_at", { mode: "timestamp_ms" }).notNull(),
});

// Promo Codes
export const promo_codes = sqliteTable("promo_codes", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  code: text("code").unique().notNull(),
  discount_type: text("discount_type").notNull(), // 'percentage', 'fixed'
  discount_value: real("discount_value").notNull(), // e.g., 10 for 10% or $10
  applicable_plan: text("applicable_plan"), // null if applicable to all plans
  max_uses: integer("max_uses"), // null for unlimited uses
  uses_remaining: integer("uses_remaining"),
  expires_at: integer("expires_at", { mode: "timestamp_ms" }),
  created_at: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

// Payment History
export const payments = sqliteTable("payment", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  user_id: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  subscription_id: text("subscription_id").references(
    () => user_subscriptions.id
  ),
  amount: real("amount").notNull(),
  currency: text("currency").notNull().default("USD"),
  status: text("status").notNull(), // 'succeeded', 'failed', 'pending', 'refunded'
  provider: text("provider").notNull(), // 'paypal', 'stripe', etc.
  provider_payment_id: text("provider_payment_id").notNull(),
  payment_type: text("payment_type").notNull(), // 'subscription', 'extra_recipes'
  promo_code_id: text("promo_code_id").references(() => promo_codes.id), // Optional promo code
  created_at: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

// Subscription Usage Tracking
export const subscription_usage = sqliteTable("subscription_usage", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  user_id: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  subscription_id: text("subscription_id")
    .notNull()
    .references(() => user_subscriptions.id),
  period_start: integer("period_start", { mode: "timestamp_ms" }).notNull(),
  period_end: integer("period_end", { mode: "timestamp_ms" }).notNull(),
  recipes_created: integer("recipes_created").notNull().default(0),
  templates_used: integer("templates_used").notNull().default(0),
  video_minutes_used: integer("video_minutes_used").notNull().default(0),
  updated_at: integer("updated_at", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

// Subscription Add-ons
export const subscription_addons = sqliteTable("subscription_addon", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(), // Add-on name, e.g., 'Extra Video Minutes'
  description: text("description"), // Description of the add-on
  type: text("type").notNull(), // e.g., 'extra_recipes', 'extra_video_minutes', 'premium_templates'
  price: real("price").notNull(), // Cost of the add-on
  created_at: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});
