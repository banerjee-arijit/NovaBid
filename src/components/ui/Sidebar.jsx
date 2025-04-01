import { Home, Gavel } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "200px",
        height: "100vh",
        background: "#111623",
        padding: "20px",
        color: "white",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>NOVA Bid</h2>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            <Link
              to="/dashboard"
              style={{
                textDecoration: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Home size={20} style={{ marginRight: "10px" }} /> Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/auction"
              style={{
                textDecoration: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Gavel size={20} style={{ marginRight: "10px" }} /> Auctions
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
