import type { Product } from "../types/product";

export type StockStatus =
  | "In Stock"
  | "Low Stock"
  | "Out of Stock";

export function getStockStatus(
  product: Product
): StockStatus {
  if (product.availableQuantity === 0) {
    return "Out of Stock";
  }

  if (product.availableQuantity <= product.threshold) {
    return "Low Stock";
  }

  return "In Stock";
}
