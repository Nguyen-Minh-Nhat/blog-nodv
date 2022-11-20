import React from "react";

const Writers = () => {
  return (
    <div>
      <h2 className="pt-7 font-semibold">Writers</h2>
      <div className="my-8 flex justify-between">
        <label
          for="pstory"
          className="mb-2 text-sm leading-6 hover:cursor-pointer"
        >
          Notifications on your published stories
        </label>
        <input
          className="w-4 hover:cursor-pointer"
          type="checkbox"
          id="pstory"
        />
      </div>
      <div className="my-8 flex justify-between">
        <label
          for="list"
          className="mb-2 text-sm leading-6 hover:cursor-pointer"
        >
          Notifications on your lists
        </label>
        <input className="w-4 hover:cursor-pointer" type="checkbox" id="list" />
      </div>
      <div className="my-8 flex justify-between">
        <label
          for="fstory"
          className="mb-2 text-sm leading-6 hover:cursor-pointer"
        >
          From editors about featuring your stories
        </label>
        <input
          className="w-4 hover:cursor-pointer"
          type="checkbox"
          id="fstory"
        />
      </div>
    </div>
  );
};

export default Writers;
