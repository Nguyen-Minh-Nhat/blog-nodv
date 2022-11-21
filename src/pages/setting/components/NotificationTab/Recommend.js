import { NativeSelect } from "@mui/material";
import React from "react";
import CheckboxSetting from "../CheckboxSetting";

const Recommend = () => {
  return (
    <>
      <div className="my-8 flex items-start">
        <div>
          <p className="mb-2 text-sm">Medium Digest</p>
          <p className="text-[13px]">
            The best stories on Medium personalized based on your interests, as
            well as outstanding stories selected by our editors.
          </p>
        </div>
        <NativeSelect defaultValue={0} className="text-sm text-lime-600">
          <option value={0}>Daily</option>
          <option value={1}>Weekly</option>
          <option value={2}>Off</option>
        </NativeSelect>
      </div>
      <CheckboxSetting
        id="read"
        tittle="Recommended reading"
        description="Featured stories, columns, and collections that we think you’ll enjoy based on your reading history."
      ></CheckboxSetting>
    </>
  );
};

export default Recommend;
