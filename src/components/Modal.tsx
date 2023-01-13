type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  onValidate: () => void;
};

const Modal = ({ children, onClose, onValidate }: ModalProps) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex flex-col items-center justify-center
    "
    >
      <div>{children}</div>
      <div
        className="flex gap-5 mt-5
      "
      >
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md
          "
          onClick={() => onValidate()}
        >
          Add post
        </button>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md
          "
          onClick={() => onClose()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
