import { Button } from "@mui/material";
import React from "react";

const AboutDescription = ({ onClick, userBio }) => {
  return (
    <div className="flex justify-between">
      <div>{userBio}</div>
      <Button className="justify-self-end" onClick={onClick}>
        Edit
      </Button>
    </div>
  );
};

export default AboutDescription;
