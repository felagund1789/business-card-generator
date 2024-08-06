import "nes.css/css/nes.min.css";
import ContactForm from "./components/ContactForm";
import CardPreview from "./components/CardPreview";
import ShareDialog from "./components/ShareDialog";
import { useState } from "react";
import { ContactData } from "./types";

function App() {
  const [contactData, setContactData] = useState<ContactData>();
  const [shareURL, setShareURL] = useState<string>("");
  const base64 =
    (document.location.hash && document.location.hash.substring(1)) || "";
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
        <ContactForm
          initialValues={contactData || ({} as ContactData)}
          onSubmit={setContactData}
        />
        {contactData && (
          <CardPreview contactData={contactData} onShare={setShareURL} />
        )}
      </main>
      <footer className="footer">
        <ul className="nes-list is-circle">
          <li>
            Built as a proof of concept to explore the capabilities of React and{" "}
            <a href="https://react-hook-form.com/">React Hook Form</a>, and to
            use <a href="https://nostalgic-css.github.io/NES.css">NES.css</a>.
            Not intended for commercial use.
          </li>
          <li>
            Visit <a href="https://github.com/nostalgic-css/">@nostalgic-css</a>{" "}
            on GitHub <i className="nes-icon github"></i> to explore NES.css
          </li>
          <li>
            Explore this project as well as my other projects on my GitHub{" "}
            <i className="nes-icon github"></i> account{" "}
            <a href="https://github.com/felagund1789/">@felagund1789</a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
