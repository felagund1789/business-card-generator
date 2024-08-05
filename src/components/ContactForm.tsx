const ContactForm = () => {
  return (
    <>
      <form>
        <div className="nes-field">
          <label htmlFor="name">Name and surname</label>
          <input type="text" id="name" className="nes-input" placeholder="Your full name" />
        </div>
        <div className="nes-field">
          <label htmlFor="jobTitle">Job title</label>
          <input type="text" id="jobTitle" className="nes-input" placeholder="What you do for a living" />
        </div>
        <div className="nes-field">
          <label htmlFor="company">Company</label>
          <input type="text" id="company" className="nes-input" placeholder="Where you work" />
        </div>
        <div className="nes-field">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" className="nes-input" placeholder="Your e-mail address" />
        </div>
        <div className="nes-field">
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" className="nes-input" placeholder="Your phone numner" />
        </div>
        <div className="center">
          <div>
            <button type="submit" className="nes-btn is-success">Generate</button>
            <button type="button" className="nes-btn is-primary">Clear</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
