import React, { useId } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ModalTrigger from "../../components/ModalTrigger";
import {
  Avatar,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import PageWithTitle from "../../components/PageWithTitle";
import EmailForm from "./components/EmailForm";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { tabItems } from "./tab";
import AccountTab from "./tab/AccountTab";
import NotificationsTab from "./tab/NotificationsTab";
import PublishedTab from "./tab/PublishedTab";

const SettingPage = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();
  const navigate = useNavigate();
  return (
    <PageWithTitle
      title={"Setting"}
      tabItems={tabItems}
      onTabChange={(tabId) => {
        navigate(tabItems[tabId].path);
      }}
    >
      <Routes>
        <Route path={tabItems[0].path} element={<AccountTab />} />
        <Route path={tabItems[2].path} element={<PublishedTab />} />
        <Route path={tabItems[2].path} element={<NotificationsTab />} />
      </Routes>
    </PageWithTitle>
  );
};

export default SettingPage;
