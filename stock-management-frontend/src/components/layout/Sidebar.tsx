import {
  Package,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-icon">
          <Package size={20} />
        </div>

        <span>StockFlow</span>
      </div>

      <nav className="sidebar-navigation">
        <p className="navigation-title">Workspace</p>



        <button className="navigation-item active">
          <Package size={18} />
          <span>Products</span>
        </button>



      </nav>
    </aside>
  );
}
