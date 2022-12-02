import { IconButton } from "@mui/material";
import { useState } from "react";
import { Popover } from "react-tiny-popover";
import IconWrapper from "../IconWrapper";
import ShadowWrapper from "../ShadowWrapper";
import DotIcon from "../Icons/DotIcon";

const MenuTrigger = ({ children }) => {
  const [open, setOpen] = useState(false);
  console.log("hi" + open);
  return (
    <Popover
      isOpen={open}
      padding={4}
      positions={["bottom"]}
      onClickOutside={() => setOpen(false)}
      content={<ShadowWrapper>{children}</ShadowWrapper>}
      containerStyle={{ zIndex: 9000 }}
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
