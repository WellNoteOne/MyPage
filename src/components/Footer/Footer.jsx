import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Valentin Sugai. All rights reserved.
    </footer>
  );
}
