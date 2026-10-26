import { useTheme } from "../context/ThemeContext";

function ThemeDemo() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className="panel">
      <h2>3.3 React Context</h2>
      <p>თემა: <strong>{theme}</strong></p>
      <div className={`theme-card theme-${theme}`}>
        <p>ეს კომპონენტი თემას Context-იდან იღებს, props-ის გარეშე.</p>
      </div>
      <div className="button-row">
        <button onClick={toggleTheme}>თემის შეცვლა</button>
      </div>
    </section>
  );
}
export default ThemeDemo;