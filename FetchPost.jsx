import useFetch from "../hooks/useFetch";

const API_URL = "https://jsonplaceholder.typicode.com/posts/1";

function FetchPost() {
  const { data, loading, error } = useFetch(API_URL);

  return (
    <section className="panel">
      <h2>3.4 Custom Hook — useFetch</h2>
      {loading && <p>მონაცემები იტვირთება...</p>}
      {error && <p className="error">შეცდომა: {error}</p>}
      {data && !loading && (
        <article>
          <p><strong>ID:</strong> {data.id}</p>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </article>
      )}
    </section>
  );
}
export default FetchPost;