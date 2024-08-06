import "nes.css/css/nes.min.css";
import ContactForm from "./components/ContactForm";
import CardPreview from "./components/CardPreview";
import ShareDialog from "./components/ShareDialog";
import { useState } from "react";
import { ContactData } from "./types";

function App() {
  const [contactData, setContactData] = useState<ContactData>();
  const [shareURL, setShareURL] = useState<string>("");
  const base64 = document.location.hash && document.location.hash.substring(1) || "";
  if (base64 && !contactData) {
    setContactData(JSON.parse(atob(base64)));
  }

  return (
    <>
      {shareURL && (
        <ShareDialog
          title="Share your busiNESs card"
          shareURL={shareURL}
          onClose={() => setShareURL("")}
        />
      )}
      <header className="header">
        <div className="nes-icon nes-logo"></div>
        <h1>BusiNESs Card Generator</h1>    
      </header>
      <main className="content">
        <ContactForm initialValues={contactData || {} as ContactData} onSubmit={setContactData} />
        { contactData && <CardPreview contactData={contactData} onShare={setShareURL}/> }
      </main>
    </>
  )
}

export default App
