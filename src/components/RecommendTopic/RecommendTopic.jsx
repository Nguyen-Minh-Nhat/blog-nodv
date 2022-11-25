import { Chip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const RecommendTopic = () => {
  return (
    <>
      <div className="mt-5">
        <h2 className="m-0 mb-5 block px-4 text-base font-medium leading-5">
          Recommended Topic
        </h2>
        <Link to="/datdz">
          <Chip
            label="C Deletable"
            className="mr-2 mb-5 cursor-pointer p-0 py-2 px-4 font-medium"
            // onClick={handleClick}
          />
        </Link>
        <Link to="/dz">
          <Chip
            label="Clickable "
            className="mr-2 mb-5 cursor-pointer p-0 py-2 px-4 font-medium
        "
            // onClick={handleClick}
          />
        </Link>
        <Link to="/datdz">
          <Chip
            label="Clickable Deletable"
            className="mr-2 mb-5 cursor-pointer p-0 py-2 px-4 font-medium"
            // onClick={handleClick}
          />
        </Link>
        <Link to="/datdz">
          <Chip
            label="Clickable "
            className="mr-2 mb-5 cursor-pointer p-0 py-2 px-4 font-medium"
            // onClick={handleClick}
          />
        </Link>
        <Link to="/datdz">
          <Chip
            label="Clickable Deletable"
            className="mr-2 mb-5 cursor-pointer p-0 py-2 px-4 font-medium"
            // onClick={handleClick}
          />
        </Link>
        <Link to="/datdz">
          <Chip
            label="Clickable Deletable"
            className="mr-2 mb-5 cursor-pointer p-0 py-2 px-4 font-medium"
            // onClick={handleClick}
          />
        </Link>
        <Link to="/datdz">
          <Chip
            label="Clickablee"
            className="mr-2 mb-5 cursor-pointer p-0 py-2 px-4 font-medium"
            // onClick={handleClick}
          />
        </Link>
      </div>
    </>
  );
};

export default RecommendTopic;
