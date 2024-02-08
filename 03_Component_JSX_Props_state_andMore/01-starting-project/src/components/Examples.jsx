import { useState } from "react";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import TabButton from "./TabButton.jsx";

export default function Examples() {
  // const [variable, function] = useState(initialValue);
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    // selectedButton => component, jsx, props, state

    // selectedTopic = selectedButton; // ---> Not the correct way to update the state.

    setSelectedTopic(selectedButton); // update the state & re-render the component.
  }

  let tabContent = <p>Select a topic to see the example</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">

      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleClick("components")}
        >
          Component
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleClick("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleClick("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleClick("state")}
        >
          State
        </TabButton>
      </menu>

      {/* Conditional rendering */}
      {tabContent}
    </Section>
  );
}
