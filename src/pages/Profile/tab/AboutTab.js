import React, { useState } from "react";
import AboutDescription from "./components/AboutDescription";
import AboutForm from "./components/AboutForm";
import AboutStarted from "./components/AboutStarted";

const AboutTab = ({ user }) => {
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
      <div className="mt-8 border-b"></div>
      <div className="mt-[65px] mb-5 border-b border-black"></div>
      <div>
        <h2 className="text-xl font-normal">
          Get an email whenever {user.username} publishes.
        </h2>
        <p className="mt-2 pb-5 text-sm">You cannot subscribe to yourself</p>
      </div>
    </>
  );
};

export default AboutTab;
