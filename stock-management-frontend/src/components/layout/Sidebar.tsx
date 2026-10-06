import {
  LayoutDashboard,
  Package,
  Settings,
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

        <button className="navigation-item">
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </button>

        <button className="navigation-item active">
          <Package size={18} />
          <span>Products</span>
        </button>

        <p className="navigation-title">System</p>

        <button className="navigation-item">
          <Settings size={18} />
          <span>Settings</span>
        </button>
      </nav>
    </aside>
  );
}
