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
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
    </header>
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
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
