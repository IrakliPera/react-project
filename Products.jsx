import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "კლავიატურა", description: "კომპიუტერის კლავიატურა" },
  { id: 2, name: "მაუსი", description: "კომპიუტერის მაუსი" },
  { id: 3, name: "მონიტორი", description: "ეკრანი კომპიუტერისთვის" }
];

function Products() {
  return (
    <section className="panel">
      <h2>4. პროდუქტები</h2>
      <div className="grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <Link className="button-link" to={`/product/${product.id}`}>დეტალები</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Products;