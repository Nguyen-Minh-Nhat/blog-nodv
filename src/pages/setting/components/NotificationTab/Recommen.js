import { NativeSelect } from "@mui/material";
import React from "react";

const Recommen = () => {
  return (
    <div>
      <h2 className="font-semibold">Story recommendations</h2>
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
      <div className="my-8 flex justify-between">
        <div className="flex flex-col">
          <label
            for="read"
            className="mb-2 text-sm leading-6 hover:cursor-pointer"
          >
            Recommended reading
          </label>
          <label for="read" className="text-[13px] hover:cursor-pointer">
            Featured stories, columns, and collections that we think you’ll
            enjoy based on your reading history.
          </label>
        </div>
        <input className="w-4 hover:cursor-pointer" type="checkbox" id="read" />
      </div>
    </div>
  );
};

export default Recommen;
