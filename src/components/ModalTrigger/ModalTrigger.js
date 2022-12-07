import { Modal } from "@mui/material";
import { Children, cloneElement, isValidElement, useState } from "react";

const ModalTrigger = ({ button = "click", children }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { onClose: handleClose });
    }
    return child;
  });

  return (
    <div>
      <div onClick={() => setOpen(true)}>{button}</div>
      <Modal open={open} onClose={handleClose}>
        <div className="position-center absolute ">{childrenWithProps}</div>
      </Modal>
    </div>
  );
};

export default ModalTrigger;
