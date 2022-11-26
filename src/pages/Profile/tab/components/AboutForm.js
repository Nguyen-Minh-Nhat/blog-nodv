import { Button } from "@mui/material";
import React from "react";
import Editor from "../../../../components/Editor";

const AboutForm = ({
  setShowForm,
  setShowDes,
  setShowStarted,
  about,
  setAbout,
}) => {
  const handleClick = () => {
    setShowDes(!!about.content);
    setShowStarted(!about.content);
    setShowForm(false);
  };
  const autoSave = () => {
    let title = "";
    let subtitle = "";
    const imageList = [];

    // rawContent.blocks.forEach((block) => {
    //   if (block.type === "image") imageList.push(block.data.file.url);
    // });
    // setPost((prev) => ({
    //   ...prev,
    //   title,
    //   subtitle,
    //   thumbnail: imageList[0],
    //   imageList,
    // }));
  };

  return (
    <div>
      <Editor defaultValue={{}} onChange={autoSave} />
      <div className="flex justify-end">
        <Button
          variant="outlined"
          className="btn rounded-full normal-case"
          size="medium"
          onClick={handleClick}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          className="btn ml-3 rounded-full normal-case"
          size="medium"
          disableElevation
          onClick={handleClick}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default AboutForm;
