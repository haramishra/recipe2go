"use server";

import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { recipeCards } from "@/server/db/schema/recipes";
import { users } from "@/server/db/schema/user";
import { eq } from "drizzle-orm";

const getRecipesCards = async (offset: number = 0, limit: number = 10) => {
  const session = await auth();
  if (!session) {
    return [];
  }
  const userId = session.user?.id;

  const recipesCards = await db
    .select()
    .from(recipeCards)
    .where(eq(recipeCards.user_id, userId!))
    .offset(offset)
    .limit(limit);

  return recipesCards;
};

export { getRecipesCards };
