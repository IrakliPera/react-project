import PropTypes from "prop-types";

function Child({ books }) {
  if (books.length === 0) {
    return <p className="status">წიგნები არ მოიძებნა</p>;
  }

  return (
    <div className="grid">
      {books.map((book) => (
        <article className="book-card" key={book.id}>
          <h3>{book.name}</h3>
          <p>ავტორი: {book.author}</p>
        </article>
      ))}
    </div>
  );
}

Child.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Child;