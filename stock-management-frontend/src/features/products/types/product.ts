export type ProductAttribute = {
  name: string;
  value: string;
};

export type Product = {
  id: string;
  name: string;
  sku: string;
  category: string;
  unit: string;
  description: string;
  attributes: ProductAttribute[];
  availableQuantity: number;
  threshold: number;
};
