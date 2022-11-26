import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import PageWithTitle from "../../components/PageWithTitle";
import { tabItems } from "./tab";

const ProfilePage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.data.info);
  return (
    <PageWithTitle
      title={user.username}
      tabItems={tabItems}
      onTabChange={(tabId) => {
        navigate(tabItems[tabId].path);
      }}
    >
      <Outlet />
    </PageWithTitle>
  );
};

export default ProfilePage;
