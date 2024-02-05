import reactImg from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";

const reactDescription = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Creating own Custom Component Header. 
// dynamic description of reactDescription.
function Header() {
  const description = reactDescription[getRandomInt(2)];

  return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
    </header>
  );
}


// ---> Props.
function CoreConcepts({image, title, description}) { // destructuring props.
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

// can not use Header(); for calling function in react.
// we use <Header />; for calling function in react.

function App() {
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
      </main>
    </div>
  );
}

export default App;
