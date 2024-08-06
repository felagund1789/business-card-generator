import { MouseEvent, useRef, useState } from "react";

interface Props {
  title: string;
  shareURL: string;
  onClose: () => void;
}

const ShareDialog = ({ title, shareURL, onClose }: Props) => {
  const [success, setSuccess] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const copy = (event: MouseEvent) => {
    event.preventDefault();
    const copyInput = ref.current;

    if (copyInput) {
      // Select the text field
      copyInput.select();
      copyInput.setSelectionRange(0, 99999); // For mobile devices

      // Copy the text inside the text field
      navigator.clipboard.writeText(copyInput.value);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <dialog open className="nes-dialog">
      <form method="dialog">
        <p className="title">{title}</p>
        {success && <p className="nes-text is-success">Copied successfully!</p>}
        <div className="nes-field">
          <input ref={ref} className="nes-input" readOnly value={shareURL} />
        </div>
        <menu className="dialog-menu">
          <button className="nes-btn" onClick={copy}>
            Copy
          </button>
          <button
            type="submit"
            onClick={onClose}
            className="nes-btn is-primary"
          >
            Close
          </button>
        </menu>
      </form>
    </dialog>
  );
};

export default ShareDialog;
