import Child from "./Child";

const books = [
  { id: 1, name: "JavaScript Basics", author: "John Smith" },
  { id: 2, name: "React Guide", author: "Anna Brown" },
  { id: 3, name: "Learning HTML", author: "David Wilson" }
];

function Parent() {
  return (
    <section className="panel">
      <h2>2. Props — Parent და Child</h2>
      <p className="muted">Parent გადასცემს წიგნების მასივს Child კომპონენტს props-ის საშუალებით.</p>
      <Child books={books} />
    </section>
  );
}
export default Parent;