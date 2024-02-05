import reactImg from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png";

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

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
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
             image={componentImg}
             title="Components"
             description="The core UI building block" />

            <CoreConcepts />

            <CoreConcepts/>
          </ul>

        </section>
      </main>
    </div>
  );
}

export default App;
