import { ContactData } from "../types";

interface Props {
  contactData: ContactData;
}

const CardPreview = ({ contactData }: Props) => {
  return (
    <div className="nes-container with-title">
      <h2 className="title">My busiNESs card</h2>
      <h2>{contactData.name}</h2>
      <p>
        {contactData.jobTitle}
        {contactData.company ? ` @ ${contactData.company}` : ""}
      </p>
      <p>email: {contactData.email}</p>
      {contactData.phone && <p>phone: {contactData.phone}</p>}
    </div>
  );
};

export default CardPreview;
