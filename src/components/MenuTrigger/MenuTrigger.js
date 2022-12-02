import { IconButton } from "@mui/material";
import { useState } from "react";
import { Popover } from "react-tiny-popover";
import IconWrapper from "../IconWrapper";
import ShadowWrapper from "../ShadowWrapper";
import DotIcon from "../Icons/DotIcon";

const MenuTrigger = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover
      isOpen={open}
      padding={4}
      positions={["bottom", "top"]}
      onClickOutside={() => setOpen(false)}
      content={<ShadowWrapper>{children}</ShadowWrapper>}
      containerStyle={{ zIndex: 9999 }}
    >
      <IconButton size="small" onClick={() => setOpen(!open)}>
        <IconWrapper>
          <DotIcon />
        </IconWrapper>
      </IconButton>
    </Popover>
  );
};

export default MenuTrigger;
