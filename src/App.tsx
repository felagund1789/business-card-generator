import "nes.css/css/nes.min.css";
import ContactForm from "./components/ContactForm";
import CardPreview from "./components/CardPreview";
import { useState } from "react";
import { ContactData } from "./types";

function App() {
  const [contactData, setContactData] = useState<ContactData>();

  return (
    <>
      <header className="header">
        <div className="nes-icon nes-logo"></div>
        <h1>BusiNESs Card Generator</h1>    
      </header>
      <main className="content">
        <ContactForm onSubmit={setContactData} />
        { contactData && <CardPreview contactData={contactData} /> }
      </main>
    </>
  )
}

export default App
