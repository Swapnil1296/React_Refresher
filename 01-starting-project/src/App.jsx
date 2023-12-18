import { useState } from "react";
import CoreConcepts from "./Components/CoreConcepts";
import Header from "./Components/Header";
import TabButtons from "./Components/TabButtons";
import componentsImg from "./assets/components.png";
import CoreData from "./Components/CoreData";
import Examples from "./Components/Examples";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreData />
        <Examples />
      </main>
    </div>
  );
}

export default App;
