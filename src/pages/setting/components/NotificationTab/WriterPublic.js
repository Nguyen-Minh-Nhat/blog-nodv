import React from "react";

const WriterPublic = () => {
  return (
    <div>
      <h2 className="pt-7 font-semibold">From writers and publications</h2>
      <div className="my-8 flex justify-between">
        <label
          for="new"
          className="mb-2 text-sm leading-6 hover:cursor-pointer"
        >
          New stories from writers you’ve subscribed to
        </label>
        <input className="w-4 hover:cursor-pointer" type="checkbox" id="new" />
      </div>
      <div className="my-8 flex justify-between">
        <label
          for="digest"
          className="mb-2 text-sm leading-6 hover:cursor-pointer"
        >
          Digests from publications you follow
        </label>
        <input
          className="w-4 hover:cursor-pointer"
          type="checkbox"
          id="digest"
        />
      </div>
      <div className="my-8 flex justify-between">
        <label
          for="newletter"
          className="mb-2 text-sm leading-6 hover:cursor-pointer"
        >
          Newsletters from publications
        </label>
        <input
          className="w-4 hover:cursor-pointer"
          type="checkbox"
          id="newletter"
        />
      </div>
    </div>
  );
};

export default WriterPublic;
