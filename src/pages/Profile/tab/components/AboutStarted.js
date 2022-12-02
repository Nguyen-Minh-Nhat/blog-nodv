import { Button, Typography } from "@mui/material";
import React from "react";

const AboutStarted = ({ setShowForm, setShowStarted }) => {
  return (
    <div className="flex justify-center pb-12">
      <div className="flex w-[60%] flex-col items-center justify-center">
        <h2 className="text-base font-semibold">
          Tell the world about yourself
        </h2>
        <Typography className="my-5 text-sm text-[#757575]">
          Here’s where you can share more about yourself: your history, work
          experience, accomplishments, interests, dreams, and more. You can even
          add images and use rich text to personalize your bio.
        </Typography>
        <Button
          variant="contained"
          className="btn ml-3 rounded-full font-normal normal-case"
          size="medium"
          color="success"
          disableElevation
          onClick={() => {
            setShowForm(true);
            setShowStarted(false);
          }}
        >
          Get started
        </Button>
      </div>
    </div>
  );
};

export default AboutStarted;
