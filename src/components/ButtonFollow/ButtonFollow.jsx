import { Chip } from "@mui/material";
import React from "react";
import { useState } from "react";

const ButtonFollow = ({ item }) => {
  const [followed, setFollowed] = useState();

  const handleFollowed = (item) => {
    item.follow = !item.follow;
    setFollowed(item.follow);
  };
  return (
    <>
      <Chip
        label={item.follow ? "Following" : "Follow"}
        variant="outlined"
        className={item.follow ? "bg-black text-white" : "border-rgb"}
        onClick={() => {
          handleFollowed(item);
        }}
      />
    </>
  );
};

export default ButtonFollow;
