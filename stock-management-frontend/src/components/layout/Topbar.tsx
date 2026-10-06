import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-search">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search products..."
        />
      </div>

      <div className="topbar-actions">
        <button
          className="notification-button"
          aria-label="Open notifications"
        >
          <Bell size={19} />

          <span className="notification-dot" />
        </button>

        <div className="user-profile">
          <div className="user-avatar">
            DM
          </div>

          <div className="user-info">
            <strong>Admin</strong>
            <span>Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
}
