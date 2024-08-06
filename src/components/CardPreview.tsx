import { ContactData } from "../types";
import { sha256 } from "js-sha256";

interface Props {
  contactData: ContactData;
}

const CardPreview = ({ contactData }: Props) => {
  const vcard = `BEGIN:VCARD
VERSION:3.0
N;CHARSET=UTF-8:${contactData.name}
EMAIL;CHARSET=UTF-8;type=INTERNET,WORK:${contactData.email}
TEL;CHARSET=UTF-8;type=WORK:${contactData.phone}
ORG;CHARSET=UTF-8:${contactData.company}
TITLE;CHARSET=UTF-8:${contactData.jobTitle}
END:VCARD`;
  const quickchartURL = `https://quickchart.io/qr?text=${encodeURI(vcard)}`;
  const gravatarURL = `https://gravatar.com/avatar/${sha256(
    String(contactData.email).trim().toLocaleLowerCase()
  )}?s=150`;

  return (
    <div className="nes-container card-preview">
      {contactData.gravatar && <img src={gravatarURL} />}
      <div>
        <h2>{contactData.name}</h2>
        <p>
          {contactData.jobTitle}
          {contactData.company ? ` @ ${contactData.company}` : ""}
        </p>
        <p>email: {contactData.email}</p>
        {contactData.phone && <p>phone: {contactData.phone}</p>}
      </div>
      {contactData.qr && <img src={quickchartURL} />}
    </div>
  );
};

export default CardPreview;
