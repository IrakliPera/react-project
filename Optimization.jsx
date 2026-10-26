import { useCallback, useMemo, useState } from "react";

const initialNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Optimization() {
  const [numbers, setNumbers] = useState(initialNumbers);
  const [nextNumber, setNextNumber] = useState(11);

  // useMemo იმახსოვრებს გაფილტრულ შედეგს მანამ, სანამ numbers არ შეიცვლება.
  const evenNumbers = useMemo(
    () => numbers.filter((number) => number % 2 === 0),
    [numbers]
  );

  // useCallback ინარჩუნებს ფუნქციის მითითებას, სანამ მისი dependencies არ შეიცვლება.
  const addNumber = useCallback(() => {
    setNumbers((current) => [...current, nextNumber]);
    setNextNumber((current) => current + 1);
  }, [nextNumber]);

  return (
    <section className="panel">
      <h2>3.5 useMemo და useCallback</h2>
      <p><strong>ყველა რიცხვი:</strong> {numbers.join(", ")}</p>
      <p><strong>ლუწი რიცხვები:</strong> {evenNumbers.join(", ") || "არ არის"}</p>
      <button onClick={addNumber}>მასივში {nextNumber}-ის დამატება</button>
    </section>
  );
}
export default Optimization;