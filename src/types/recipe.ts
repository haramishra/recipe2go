
export interface RecipeData {
  ingredients: {
    name: string;
    quantity: number;
    unit: string;
    notes?: string;
  }[];
  time: {
    prep: number;
    cook: number;
    total: number;
  };
  instructions: {
    text: string;
    timer?: number;
    tip?: string;
  }[];
  nutrition?: {
    calories?: number;
    protein?: number;
    carbohydrates?: number;
    fat?: number;
    fiber?: number;
    sugar?: number;
    sodium?: number;
  };
  tags?: string[];
}

// Types for database operations with camelCase for frontend usage
export type Recipe = {
  id: string;
  recipeData: RecipeData;
  createdAt: number;
  updatedAt: number;
};

export type NewRecipe = {
  id?: string;
  recipeData: RecipeData;
  createdAt?: number;
  updatedAt?: number;
};

export type RecipeCard = {
  id: string;
  userId?: string;
  name: string;
  description?: string;
  image?: string;
  sourceUrl?: string;
  createdAt: number;
  recipeId: string;
};

export type NewRecipeCard = {
  id?: string;
  userId?: string;
  name: string;
  description?: string;
  image?: string;
  sourceUrl?: string;
  createdAt?: number;
  recipeId: string;
};
