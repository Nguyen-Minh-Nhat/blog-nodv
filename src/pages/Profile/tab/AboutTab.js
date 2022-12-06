import React, { useState } from "react";
import { useSelector } from "react-redux";
import AboutDescription from "./components/AboutDescription";
import AboutForm from "./components/AboutForm";
import AboutStarted from "./components/AboutStarted";

const AboutTab = () => {
  const user = useSelector((state) => state.user.data.info);
  const [ShowForm, setShowForm] = useState(false);
  console.log(!user.bio);
  const handleClick = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <>
      <div>
        {(() => {
          if (ShowForm) {
            return <AboutForm onClick={handleClick} user={user}></AboutForm>;
          } else {
            return !user.bio ? (
              <AboutStarted onClick={handleClick} />
            ) : (
              <AboutDescription
                onClick={handleClick}
                userBio={user.bio}
              ></AboutDescription>
            );
          }
        })()}
      </div>
    </>
  );
};

export default AboutTab;
