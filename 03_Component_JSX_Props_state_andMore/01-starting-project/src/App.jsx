import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  function handleClick() {
      console.log("Button Clicked! - from App.jsx");
  }
  return (
    <div>
      {/* load component HTML */}
      <Header />
      
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
             image={CORE_CONCEPTS[0].image}
             title={CORE_CONCEPTS[0].title}
             description={CORE_CONCEPTS[0].description} />

            <CoreConcepts {...CORE_CONCEPTS[1]} />

            <CoreConcepts {...CORE_CONCEPTS[2]} />

            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>

        </section>

        <section id="examples">
          <h2>Examples</h2>

          <menu>
            <TabButton onSelect={handleClick}>Component</TabButton>
            <TabButton onSelect={handleClick}>JSX</TabButton>
            <TabButton onSelect={handleClick}>Props</TabButton>
            <TabButton onSelect={handleClick}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
