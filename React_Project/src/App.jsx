import Clock from "./Clock"
import Container from "./Container"
import React, { useState } from "react";
import { LanguageContext } from "./LanguageContext";

function App() {
  const [language, setLanguage] = useState("it");

  function handleSetLanguage(event) {
    setLanguage(event.target.value);
  }

  return (
    <div>
      <select value={language} onChange={handleSetLanguage}>
        <option value="it">IT</option>
        <option value="en">EN</option>
      </select>
      {/* Senza il context provider il componente non riuscirà ad utilizzare il render condizionale e quindi anche
      se verrà scelta l'opzione EN verrà renderizzata la prima versione disponibile */}
        <Clock /> 
    </div>
  );
}

export default App;