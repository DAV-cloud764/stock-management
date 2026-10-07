import { Bell } from "lucide-react";

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-context">
        <span>Inventory management </span>
        <strong>System</strong>
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
