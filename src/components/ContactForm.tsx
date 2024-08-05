import { useForm, FieldValues } from "react-hook-form";
import { ContactData } from "../types";

interface Props {
  onSubmit: (contactData: ContactData) => void;
}

const ContactForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const defaultValues: ContactData = {
    name: "",
    jobTitle: "",
    company: "",
    email: "",
    phone: "",
  };

  const submitHandler = (values: FieldValues) => {
    onSubmit({
      name: values["name"],
      jobTitle: values["jobTitle"],
      company: values["company"],
      email: values["email"],
      phone: values["phone"],
    });
  };

  return (
    <div className="nes-container with-title">
      <h2 className="title">BusiNESs Card Generator</h2>
      <p>
        Generate your business card in the style of classic NES. Enter your
        details and hit <b>Generate</b>.
      </p>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="nes-field">
          <label htmlFor="name">Name and surname</label>
          <input
            {...register("name", { required: true, minLength: 3 })}
            className={`nes-input ${errors.name ? "is-error" : ""}`}
            placeholder="Your full name"
          />
        </div>
        <div className="nes-field">
          <label htmlFor="jobTitle">Job title</label>
          <input
            {...register("jobTitle", { required: true, minLength: 3 })}
            className={`nes-input ${errors.jobTitle ? "is-error" : ""}`}
            placeholder="What you do for a living"
          />
        </div>
        <div className="nes-field">
          <label htmlFor="company">Company</label>
          <input
            {...register("company")}
            className="nes-input"
            placeholder="Where you work"
          />
        </div>
        <div className="nes-field">
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: true, pattern: /^.+@.+\..+$/i })}
            className={`nes-input ${errors.email ? "is-error" : ""}`}
            placeholder="Your e-mail address"
          />
        </div>
        <div className="nes-field">
          <label htmlFor="phone">Phone</label>
          <input
            {...register("phone")}
            className="nes-input"
            placeholder="Your phone numner"
          />
        </div>
        <div className="center">
          <div>
            <button type="submit" className="nes-btn is-success">
              Generate
            </button>
            <button
              type="button"
              className="nes-btn is-primary"
              onClick={() => reset(defaultValues)}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
