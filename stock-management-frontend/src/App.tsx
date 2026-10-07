import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import ProductTable from "./features/products/components/ProductTable";
import { products } from "./features/products/data/products";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main-area">
        <Topbar />

        <main className="main-content">
          <div className="page-header">
            <div>
              <span className="breadcrumb">
                Inventory
              </span>

              <h1>Products</h1>

              <p>
                Manage products, stock levels and inventory thresholds.
              </p>
            </div>

            <button className="primary-button">
              + Add product
            </button>
          </div>

          <ProductTable products={products} />
        </main>
      </div>
    </div>
  );
}

export default App;
