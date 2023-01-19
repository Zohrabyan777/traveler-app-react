import icon from "./download.png";
export default function Navbar() {
  return (
    <div className="navbar">
      <img
        src={icon}
        className="earth-icon"
        style={{ height: "25px", width: "25px", margin: 0 }}
      />
      <span className="nav_span"> My travel journal...</span>
    </div>
  );
}
