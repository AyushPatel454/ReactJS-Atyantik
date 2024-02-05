import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  // const [variable, function] = useState(initialValue);
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    // selectedButton => component, jsx, props, state

    // selectedTopic = selectedButton; // ---> Not the correct way to update the state.

    setSelectedTopic(selectedButton); // update the state & re-render the component.
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
              description={CORE_CONCEPTS[0].description}
            />

            <CoreConcepts {...CORE_CONCEPTS[1]} />

            <CoreConcepts {...CORE_CONCEPTS[2]} />

            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>

          <menu>
            <TabButton onSelect={() => handleClick("components")}>
              Component
            </TabButton>
            <TabButton onSelect={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleClick("props")}>Props</TabButton>
            <TabButton onSelect={() => handleClick("state")}>State</TabButton>
          </menu>

          {/* Conditional rendering */}
          {!selectedTopic ? (
            <p>Select a topic to see the example</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
