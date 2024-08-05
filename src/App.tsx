import "nes.css/css/nes.min.css";
import ContactForm from "./components/ContactForm";
import CardPreview from "./components/CardPreview";
import { useState } from "react";
import { ContactData } from "./types";

function App() {
  const [contactData, setContactData] = useState<ContactData>();

  return (
    <>
      <ContactForm onSubmit={setContactData} />
      { contactData && <CardPreview contactData={contactData} /> }
    </>
  )
}

export default App
