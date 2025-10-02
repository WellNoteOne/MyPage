import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="text">
        © {new Date().getFullYear()} Valentin Sugai. All rights reserved.
      </div>
    </footer>
  );
}
