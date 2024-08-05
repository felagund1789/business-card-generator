import { useForm, FieldValues } from "react-hook-form";
import { ContactData } from "../types";

interface Props {
  onSubmit: (contactData: ContactData) => void;
}

const ContactForm = ({ onSubmit }: Props) => {
  const { register, handleSubmit } = useForm();

  const submitHandler = (values: FieldValues) => {
    onSubmit({
      name: values["name"],
      jobTitle: values["jobTitle"],
      company: values["company"],
      email: values["email"],
      phone: values["phone"],
    });
  } 

  return (
    <div className="nes-container with-title">
      <h2 className="title">BusiNESs Card Generator</h2>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="nes-field">
          <label htmlFor="name">Name and surname</label>
          <input { ...register("name") } className="nes-input" placeholder="Your full name" />
        </div>
        <div className="nes-field">
          <label htmlFor="jobTitle">Job title</label>
          <input { ...register("jobTitle") } className="nes-input" placeholder="What you do for a living" />
        </div>
        <div className="nes-field">
          <label htmlFor="company">Company</label>
          <input { ...register("company") } className="nes-input" placeholder="Where you work" />
        </div>
        <div className="nes-field">
          <label htmlFor="email">Email</label>
          <input { ...register("email") } className="nes-input" placeholder="Your e-mail address" />
        </div>
        <div className="nes-field">
          <label htmlFor="phone">Phone</label>
          <input { ...register("phone") } className="nes-input" placeholder="Your phone numner" />
        </div>
        <div className="center">
          <div>
            <button type="submit" className="nes-btn is-success">Generate</button>
            <button type="button" className="nes-btn is-primary">Clear</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
