import { NativeSelect } from "@mui/material";
import React from "react";

const SocialActivity = () => {
  return (
    <div>
      <h2 className="pt-7 font-semibold">Social Activity</h2>
      <div className="my-8 flex justify-between">
        <div className="flex flex-col">
          <label for="flhl" className="text-sm hover:cursor-pointer">
            When someone follows you or highlights the same passage in a story
          </label>
        </div>
        <input className="w-4 hover:cursor-pointer" type="checkbox" id="flhl" />
      </div>
      <div className="my-8 flex items-start justify-between">
        <p className="mb-2 text-sm">When someone mentions you in their story</p>

        <NativeSelect defaultValue={0} className="text-sm text-lime-600">
          <option value={0}>All</option>
          <option value={1}>In network</option>
          <option value={2}>Off</option>
        </NativeSelect>
      </div>
    </div>
  );
};

export default SocialActivity;
