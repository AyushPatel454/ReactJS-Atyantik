import { useState } from "react";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header/Header.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  

  return (
    <>
      {/* load component HTML */}
      <Header />

      <main>
        <CoreConcepts />

        <Examples />
      </main>
    </>
  );
}

export default App;
