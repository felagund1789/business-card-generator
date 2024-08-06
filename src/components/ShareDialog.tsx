interface Props {
  title: string;
  shareURL: string;
  onClose: () => void;
}

const ShareDialog = ({ title, shareURL, onClose }: Props) => {
  return (
    <dialog open className="nes-dialog">
      <form method="dialog">
        <p className="title">{title}</p>
        <div className="nes-field">
          <input className="nes-input" value={shareURL} />
        </div>
        <menu className="dialog-menu">
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
