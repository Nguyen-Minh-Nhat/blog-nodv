import React from "react";
import CheckboxSetting from "../CheckboxSetting";

const Writers = () => {
  return (
    <>
      <CheckboxSetting
        id="product-features"
        tittle="New product features from Medium"
      ></CheckboxSetting>
      <CheckboxSetting
        id="info"
        tittle="Information about Medium membership"
      ></CheckboxSetting>
      <CheckboxSetting
        id="updates"
        tittle="Writing updates and announcements"
      ></CheckboxSetting>
      <div className="border-b"></div>
      <CheckboxSetting
        id="e-notifications"
        tittle="Allow email notifications"
        description="You’ll still receive administrative emails even if this setting is
            off."
      ></CheckboxSetting>
    </>
  );
};

export default Writers;
