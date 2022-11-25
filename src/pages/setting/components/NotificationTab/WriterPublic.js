import React from "react";
import CheckboxSetting from "../CheckboxSetting";

const WriterPublic = () => {
  return (
    <>
      <CheckboxSetting
        id="newstr"
        tittle=" New stories from writers you’ve subscribed to"
      ></CheckboxSetting>
      <CheckboxSetting
        id="digests"
        tittle="Digests from publications you follow"
      ></CheckboxSetting>
      <CheckboxSetting
        id="newsletters"
        tittle="Newsletters from publications"
      ></CheckboxSetting>
    </>
  );
};

export default WriterPublic;
