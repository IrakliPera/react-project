import { Link, useParams } from "react-router-dom";

const products = [
  { id: 1, name: "კლავიატურა", description: "კომპიუტერის კლავიატურა" },
  { id: 2, name: "მაუსი", description: "კომპიუტერის მაუსი" },
  { id: 3, name: "მონიტორი", description: "ეკრანი კომპიუტერისთვის" }
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <section className="panel"><h2>პროდუქტი ვერ მოიძებნა</h2><Link to="/products">პროდუქტებზე დაბრუნება</Link></section>;
  }

  return (
    <section className="panel">
      <h2>პროდუქტის დეტალები</h2>
      <p><strong>ID:</strong> {product.id}</p>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <Link to="/products">← პროდუქტებზე დაბრუნება</Link>
    </section>
  );
}
export default ProductDetails;