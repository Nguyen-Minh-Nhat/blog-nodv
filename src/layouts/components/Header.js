import { Button, IconButton, Modal } from "@mui/material";
import { useState } from "react";
import Login from "../../features/Auth/Login";
import Logo from "./Logo";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex h-16 items-center justify-between border-b px-16">
      <div className="flex items-center justify-center gap-2">
        <div className="w-10">
          <Logo />
        </div>
        <span className="text- mb-1 text-xl font-bold text-slate-500">
          NOVD
        </span>
      </div>

      <div>
        <Button
          variant="contained"
          color="inherit"
          onClick={() => setOpenModal(true)}
          className="btn rounded-full normal-case "
        >
          Get Started
        </Button>
      </div>
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

export default Header;
