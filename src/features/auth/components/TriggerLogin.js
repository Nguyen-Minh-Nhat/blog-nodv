import { IconButton, Modal } from "@mui/material";
import { useState } from "react";
import Login from "./Login";

const TriggerLogin = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div onClick={() => setOpenModal(true)}>{children}</div>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div className="position-center absolute">
          <Login />
          <div className="absolute right-4 top-4">
            <IconButton
              onClick={() => setOpenModal(false)}
              className="h-10 w-10"
            >
              <i className="fa-solid fa-xmark"></i>
            </IconButton>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TriggerLogin;
