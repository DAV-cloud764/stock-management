import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";

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

          <section className="content-placeholder">
            <h2>Product module</h2>

            <p>
              Product management will be implemented here.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
