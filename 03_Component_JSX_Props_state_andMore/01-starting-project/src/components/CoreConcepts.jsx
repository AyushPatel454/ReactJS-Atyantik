import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* JSX is capable of dealing with array of renderable data as list */} 
            {/* ****** Must be use in the <ul>...</ul> tag other wise nothing display */}

            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept key={index} {...concept} />
            ))}

          </ul>
        </section>
    );
}