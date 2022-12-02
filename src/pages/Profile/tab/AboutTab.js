import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import AboutDescription from "./components/AboutDescription";
import AboutForm from "./components/AboutForm";
import AboutStarted from "./components/AboutStarted";

const AboutTab = () => {
  const ct = "hihhihii";
  const initShowStarted = !ct;
  const initShowDes = ct;
  const user = useSelector((state) => state.user.data.info);
  const [ShowForm, setShowForm] = useState(false);
  const [ShowDes, setShowDes] = useState(initShowDes);
  const [ShowStarted, setShowStarted] = useState(initShowStarted);

  const [about, setAbout] = useState({
    content: "",
    imageList: [],
  });

  return (
    <>
      <div>
        {ShowForm && (
          <AboutForm
            setShowForm={setShowForm}
            setShowDes={setShowDes}
            setShowStarted={setShowStarted}
            about={about}
            setAbout={setAbout}
          ></AboutForm>
        )}
        {ShowDes && (
          <AboutDescription
            setShowForm={setShowForm}
            setShowDes={setShowDes}
          ></AboutDescription>
        )}
        {ShowStarted && <AboutStarted setShowForm={setShowForm}></AboutStarted>}
        {/* {ShowForm ? (
          <AboutForm
            setShowForm={setShowForm}
            setShowDes={setShowDes}
            showStart={<AboutStarted></AboutStarted>}
          />
        ) : ShowDes ? (
          <AboutDescription setShowForm={setShowForm} setShowDes={setShowDes} />
        ) : (
          <AboutStarted setShowForm={setShowForm} />
        )} */}
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
