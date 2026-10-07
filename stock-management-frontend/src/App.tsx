import { useState } from "react";

import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import ProductTable from "./features/products/components/ProductTable";
import ProductForm from "./features/products/components/ProductForm";
import { products as initialProducts } from "./features/products/data/products";
import type { Product } from "./features/products/types/product";

function App() {
  const [products, setProducts] =
    useState<Product[]>(initialProducts);

  const [isProductFormOpen, setIsProductFormOpen] =
    useState(false);

  function handleAddProduct(product: Product) {
    setProducts((currentProducts) => [
      ...currentProducts,
      product,
    ]);

    setIsProductFormOpen(false);
  }

  return (
    <div className="app">
      <Sidebar />

      <div className="main-area">
        <Topbar />

        <main className="main-content">
          <div className="page-header">
            <div>
              

              <h1>Products</h1>

              <p>
                Manage products, stock levels and
                inventory thresholds.
              </p>
            </div>

            <button
              className="primary-button"
              onClick={() =>
                setIsProductFormOpen(true)
              }
            >
              + Add product
            </button>
          </div>

          <ProductTable products={products} />

          {isProductFormOpen && (
            <ProductForm
              onSubmit={handleAddProduct}
              onCancel={() =>
                setIsProductFormOpen(false)
              }
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
