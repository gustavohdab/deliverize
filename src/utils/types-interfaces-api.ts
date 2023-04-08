// types.ts - Interfaces for the API data types

export interface Ingredient {
  quantity: any;
  id: number;
  nm_item: string;
  vl_item: number;
}

export interface IngredientGroup {
  group: string;
  max_itens: number;
  type: string;
  itens: Ingredient[];
}

export interface Product {
  id: string;
  createdAt: string;
  nm_product: string;
  description: string;
  vl_price: number;
  vl_discount: number;
  url_image: string;
  ingredients: IngredientGroup[];
}
