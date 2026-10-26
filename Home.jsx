import Parent from "../components/Parent";
import Counter from "../components/Counter";
import ThemeDemo from "../components/ThemeDemo";
import FetchPost from "../components/FetchPost";
import Optimization from "../components/Optimization";
import ReduxCounter from "../components/ReduxCounter";
import RegistrationForm from "../components/RegistrationForm";

function Home() {
  return (
    <>
      <section className="panel">
        <h2>გამარჯობა!</h2>
        <p>ეს სასწავლო პროექტი აერთიანებს React-ის კომპონენტებს, Hooks-ს, Context-ს, Router-ს, Redux Toolkit-სა და ფორმის ვალიდაციას.</p>
      </section>
      <Parent />
      <Counter />
      <ThemeDemo />
      <FetchPost />
      <Optimization />
      <ReduxCounter />
      <RegistrationForm />
    </>
  );
}
export default Home;