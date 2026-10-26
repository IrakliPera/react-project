import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // useEffect ცარიელი dependency array-ით მუშაობს კომპონენტის ჩატვირთვისას.
  // React StrictMode დეველოპერულ რეჟიმში ეფექტს შეიძლება ორჯერ ამოწმებდეს.
  useEffect(() => {
    console.log("Counter component mounted");
  }, []);

  return (
    <section className="panel">
      <h2>3.1–3.2 useState და useEffect</h2>
      <p>მიმდინარე რიცხვი: <strong>{count}</strong></p>
      <div className="button-row">
        <button onClick={() => setCount((current) => current + 1)}>გაზრდა +</button>
        <button className="secondary" onClick={() => setCount((current) => current - 1)}>შემცირება −</button>
      </div>
      <p className="muted">ჩატვირთვის შეტყობინება ნახე ბრაუზერის Console-ში.</p>
    </section>
  );
}
export default Counter;