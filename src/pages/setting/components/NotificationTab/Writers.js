import React from "react";
import CheckboxSetting from "../CheckboxSetting";

const Writers = () => {
  return (
    <>
      <CheckboxSetting
        id="story"
        tittle="Notifications on your published stories"
      ></CheckboxSetting>
      <CheckboxSetting
        id="list"
        tittle="Notifications on your lists"
      ></CheckboxSetting>
      <CheckboxSetting
        id="editor"
        tittle="From editors about featuring your stories"
      ></CheckboxSetting>
    </>
  );
};

export default Writers;
