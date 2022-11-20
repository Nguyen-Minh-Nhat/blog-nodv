import React from "react";

const Writers = () => {
  return (
    <div className="mb-8">
      <h2 className="pt-7 font-semibold">Others from Medium</h2>
      <div className="my-8 flex justify-between">
        <label
          for="product-features"
          className="mb-2 text-sm leading-6 hover:cursor-pointer"
        >
          New product features from Medium
        </label>
        <input
          className="w-4 hover:cursor-pointer"
          type="checkbox"
          id="product-features"
        />
      </div>
      <div className="my-8 flex justify-between">
        <label
          for="info"
          className="mb-2 text-sm leading-6 hover:cursor-pointer"
        >
          Information about Medium membership
        </label>
        <input className="w-4 hover:cursor-pointer" type="checkbox" id="info" />
      </div>
      <div className="my-8 flex justify-between">
        <label
          for="updates"
          className="mb-2 text-sm leading-6 hover:cursor-pointer"
        >
          Writing updates and announcements
        </label>
        <input
          className="w-4 hover:cursor-pointer"
          type="checkbox"
          id="updates"
        />
      </div>
      <div className="border-b"></div>
      <div className="my-8 flex justify-between">
        <div className="flex flex-col">
          <label
            for="e-notifications"
            className="mb-2 text-sm leading-6 hover:cursor-pointer"
          >
            Allow email notifications
          </label>
          <label
            for="e-notifications"
            className="pb-8 text-[13px] hover:cursor-pointer"
          >
            You’ll still receive administrative emails even if this setting is
            off.
          </label>
        </div>
        <input
          className="w-4 hover:cursor-pointer"
          type="checkbox"
          id="e-notifications"
        />
      </div>
    </div>
  );
};

export default Writers;
