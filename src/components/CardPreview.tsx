import { ContactData } from "../types";
import { sha256 } from "js-sha256";

interface Props {
  contactData: ContactData;
  onShare: (shareURL: string) => void;
}

const CardPreview = ({ contactData, onShare }: Props) => {
  const vcard = `BEGIN:VCARD
VERSION:3.0
N;CHARSET=UTF-8:${contactData.name}
EMAIL;CHARSET=UTF-8;type=INTERNET,WORK:${contactData.email}
TEL;CHARSET=UTF-8;type=WORK:${contactData.phone}
ORG;CHARSET=UTF-8:${contactData.company}
TITLE;CHARSET=UTF-8:${contactData.jobTitle}
END:VCARD`;
  const quickchartURL = `https://quickchart.io/qr?text=${encodeURI(
    vcard
  )}&size=120&margin=0`;
  const gravatarURL = `https://gravatar.com/avatar/${sha256(
    String(contactData.email).trim().toLocaleLowerCase()
  )}?s=120`;
  const base64 = btoa(JSON.stringify(contactData));
  const shareURL = `${document.location.protocol}//${
    document.location.hostname
  }${document.location.port ? ":" + document.location.port : ""}#${base64}`;

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
      <div className="share-btn" onClick={() => onShare(shareURL)}>
        <svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M18 16c-.79 0-1.5.31-2.03.81L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.53.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.48.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.05 4.12c-.05.22-.09.45-.09.69 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3zm0-12c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
        </svg>
      </div>
    </div>
  );
};

export default CardPreview;
