import { Button } from "@mui/material";
import React from "react";

const AboutDescription = ({ setShowForm, setShowDes }) => {
  const content =
    "This is the transcript of a keynote talk I gave at EYEO 2017 in Minneapolis. An adapted version appears in my book, How to Do Nothing: Resisting the Attention Economy. I’d like to start off by";
  return (
    <div>
      <div>{content}</div>
      <Button
        onClick={() => {
          setShowForm(true);
          setShowDes(false);
        }}
      >
        Edit
      </Button>
    </div>
  );
};

export default AboutDescription;
