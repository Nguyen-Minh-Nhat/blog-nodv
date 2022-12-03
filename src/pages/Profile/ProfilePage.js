import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import PageWithTitle from "../../components/PageWithTitle";
import AboutTab from "./tab/AboutTab";

const ProfilePage = () => {
  const user = useSelector((state) => state.user.data.info);
  return (
    <PageWithTitle title={user.username}>
      <AboutTab user={user}></AboutTab>
      <Outlet />
    </PageWithTitle>
  );
};

export default ProfilePage;
