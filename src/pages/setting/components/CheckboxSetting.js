import React from "react";

const CheckboxSetting = ({ id, tittle, description }) => {
  return (
    <div className="flex justify-between py-8">
      <div className="flex flex-col">
        <label for={id} className="mb-2 text-sm leading-6 hover:cursor-pointer">
          {tittle}
        </label>
        <label for={id} className="text-[13px] hover:cursor-pointer">
          {description}
        </label>
      </div>
      <input className="w-4 hover:cursor-pointer" type="checkbox" id={id} />
    </div>
  );
};

export default CheckboxSetting;
