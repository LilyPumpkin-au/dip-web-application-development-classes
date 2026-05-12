import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/globals.css";
import "../../styles/globals.css";
import { ThemeProvider } from "../context/ThemeContext";

export default function Layout({ children }) {
  return (
    <div>
      <section className="py-4">
        <div className="container">
          <main>{children}</main>
        </div>
      </section>
    </div>
  );
}
