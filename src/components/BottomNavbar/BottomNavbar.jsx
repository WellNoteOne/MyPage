import { useState } from "react";
import { Home, Search, PlusCircle, User } from "lucide-react";
import "./BottomNavbar.css";

export default function BottomNav() {
  const [active, setActive] = useState("home");

  return (
    <nav className="bottom-nav">
      <button
        className={`nav-item ${active === "home" ? "active" : ""}`}
        onClick={() => setActive("home")}
      >
        <Home size={26} />
        <span className="textnav">Main</span>
      </button>

      <button
        className={`nav-item ${active === "search" ? "active" : ""}`}
        onClick={() => setActive("search")}
      >
        <Search size={26} />
        <span className="textnav">Search</span>
      </button>

      <button
        className={`nav-item ${active === "profile" ? "active" : ""}`}
        onClick={() => setActive("profile")}
      >
        <User size={26} />
        <span className="textnav">Profile</span>
      </button>
    </nav>
  );
}
