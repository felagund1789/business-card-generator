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
  const quickchartURL = `https://quickchart.io/qr?text=${encodeURI(vcard)}&size=120&margin=0`;
  const gravatarURL = `https://gravatar.com/avatar/${sha256(
    String(contactData.email).trim().toLocaleLowerCase()
  )}?s=120`;

  return (
    <div className="nes-container card-preview">
      {(contactData.qr || contactData.gravatar) && (
        <div>
          {contactData.gravatar && <img src={gravatarURL} />}
          {contactData.qr && <img src={quickchartURL} />}
        </div>
      )}
      <div>
        <h2>{contactData.name}</h2>
        <p>
          {contactData.jobTitle}
          {contactData.company ? ` @ ${contactData.company}` : ""}
        </p>
        <p>email: {contactData.email}</p>
        {contactData.phone && <p>phone: {contactData.phone}</p>}
      </div>
    </div>
  );
};

export default CardPreview;
