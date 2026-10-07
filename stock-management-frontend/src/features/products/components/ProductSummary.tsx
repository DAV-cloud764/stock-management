import {
  AlertTriangle,
  CheckCircle2,
  Package,
  XCircle,
} from "lucide-react";

import { getStockStatus } from "../utils/stockStatus";
import type { Product } from "../types/product";

type ProductSummaryProps = {
  products: Product[];
};

export default function ProductSummary({
  products,
}: ProductSummaryProps) {
  const totalProducts = products.length;

  const inStockProducts = products.filter(
    (product) => getStockStatus(product) === "In Stock"
  ).length;

  const lowStockProducts = products.filter(
    (product) => getStockStatus(product) === "Low Stock"
  ).length;

  const outOfStockProducts = products.filter(
    (product) => getStockStatus(product) === "Out of Stock"
  ).length;

  return (
    <section className="product-summary">
      <div className="summary-card">
        <div className="summary-card-icon">
          <Package size={20} />
        </div>

        <div>
          <span className="summary-card-label">
            Total Products
          </span>

          <strong className="summary-card-value">
            {totalProducts}
          </strong>
        </div>
      </div>

      <div className="summary-card">
        <div className="summary-card-icon">
          <CheckCircle2 size={20} />
        </div>

        <div>
          <span className="summary-card-label">
            In Stock
          </span>

          <strong className="summary-card-value">
            {inStockProducts}
          </strong>
        </div>
      </div>

      <div className="summary-card">
        <div className="summary-card-icon">
          <AlertTriangle size={20} />
        </div>

        <div>
          <span className="summary-card-label">
            Low Stock
          </span>

          <strong className="summary-card-value">
            {lowStockProducts}
          </strong>
        </div>
      </div>

      <div className="summary-card">
        <div className="summary-card-icon">
          <XCircle size={20} />
        </div>

        <div>
          <span className="summary-card-label">
            Out of Stock
          </span>

          <strong className="summary-card-value">
            {outOfStockProducts}
          </strong>
        </div>
      </div>
    </section>
  );
}
