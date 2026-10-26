import { NavLink, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <Header />
      <nav className="navigation" aria-label="მთავარი ნავიგაცია">
        <NavLink to="/">მთავარი</NavLink>
        <NavLink to="/products">პროდუქტები</NavLink>
        <NavLink to="/contact">კონტაქტი</NavLink>
      </nav>
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<section className="panel"><h2>გვერდი ვერ მოიძებნა</h2><p>შეამოწმე URL მისამართი.</p></section>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;