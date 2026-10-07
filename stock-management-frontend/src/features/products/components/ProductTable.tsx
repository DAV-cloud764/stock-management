import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { getStockStatus } from "../utils/stockStatus";
import type { Product } from "../types/product";

type ProductTableProps = {
  products: Product[];
};

function StockStatusBadge({
  status,
}: {
  status: ReturnType<typeof getStockStatus>;
}) {
  return (
    <span
      className={`status-badge status-${status
        .toLowerCase()
        .replaceAll(" ", "-")}`}
    >
      {status}
    </span>
  );
}

function AvailabilityBadge({
  available,
}: {
  available: boolean;
}) {
  return (
    <span
      className={`availability-badge ${
        available
          ? "availability-available"
          : "availability-unavailable"
      }`}
    >
      <span className="availability-dot" />

      {available ? "Available" : "Unavailable"}
    </span>
  );
}

export default function ProductTable({
  products,
}: ProductTableProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("");

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  ).sort();

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm
      .trim()
      .toLowerCase();

    return products.filter((product) => {
      const productAttributes = product.attributes
        .map(
          (attribute) =>
            `${attribute.name} ${attribute.value}`
        )
        .join(" ");

      const searchableText = [
        product.name,
        product.sku,
        product.category,
        product.description,
        productAttributes,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        searchableText.includes(normalizedSearch);

      const matchesCategory =
        !selectedCategory ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  return (
    <section className="product-card">
      <div className="product-card-header">
        <div>
          <h2>Product catalog</h2>

          <p>
            View product information and current inventory
            levels.
          </p>
        </div>

        <span className="product-count">
          {products.length} products
        </span>
      </div>

      <div className="product-toolbar">
        <div className="product-search">
          <Search size={17} />

          <input
            type="search"
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
            placeholder="Search products..."
            aria-label="Search products"
          />
        </div>

        <select
          className="product-filter"
          value={selectedCategory}
          onChange={(event) =>
            setSelectedCategory(event.target.value)
          }
          aria-label="Filter products by category"
        >
          <option value="">Category</option>

          {categories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>

        {searchTerm && (
          <span className="search-result-count">
            {filteredProducts.length} result
            {filteredProducts.length === 1 ? "" : "s"}
          </span>
        )}
      </div>

      <div className="product-table-container">
        <table className="product-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Attributes</th>
              <th>Available</th>
              <th>Threshold</th>
              <th>Status</th>
              <th>Availability</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((product) => {
              const status = getStockStatus(product);

              const isAvailable =
                product.availableQuantity > 0;

              return (
                <tr key={product.id}>
                  <td>
                    <div className="product-name">
                      <strong>{product.name}</strong>

                      <span>{product.description}</span>
                    </div>
                  </td>

                  <td>
                    <span className="category-badge">
                      {product.category}
                    </span>
                  </td>

                  <td>
                    <div className="product-attributes">
                      {product.attributes.map(
                        (attribute) => (
                          <span key={attribute.name}>
                            {attribute.name}:{" "}
                            {attribute.value}
                          </span>
                        )
                      )}
                    </div>
                  </td>

                  <td>
                    <div className="quantity-value">
                      <strong>
                        {product.availableQuantity}
                      </strong>

                      <span>units</span>
                    </div>
                  </td>

                  <td>
                    <div className="quantity-value">
                      <strong>
                        {product.threshold}
                      </strong>

                      <span>minimum</span>
                    </div>
                  </td>

                  <td>
                    <StockStatusBadge
                      status={status}
                    />
                  </td>

                  <td>
                    <AvailabilityBadge
                      available={isAvailable}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
