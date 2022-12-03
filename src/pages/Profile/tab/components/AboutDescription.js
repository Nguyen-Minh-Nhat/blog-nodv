import { Button } from "@mui/material";
import React from "react";

const AboutDescription = ({ onClick, userBio }) => {
  return (
    <div>
      <div>{userBio}</div>
      <Button onClick={onClick}>Edit</Button>
    </div>
  );
};

export default AboutDescription;
