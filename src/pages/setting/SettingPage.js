import React from "react";
import {} from "@mui/material";

import PageWithTitle from "../../components/PageWithTitle";
import { Outlet, useNavigate } from "react-router-dom";
import { tabItems } from "./tab";

const SettingPage = () => {
  const navigate = useNavigate();
  return (
    <PageWithTitle
      title={"Setting"}
      tabItems={tabItems}
      onTabChange={(tabId) => {
        navigate(tabItems[tabId].path);
      }}
    >
      <Outlet />
    </PageWithTitle>
  );
};

export default SettingPage;
