import { FiberManualRecord } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import ModalTrigger from "../../components/ModalTrigger";
import PageWithTitle from "../../components/PageWithTitle";
import { tabItems } from "./tab";
import FollowerModal from "./tab/components/FollowerModal";
import FollowingModal from "./tab/components/FollowingModal";

const ProfilePage = () => {
  const user = useSelector((state) => state.user.data.info);
  const navigate = useNavigate();
  return (
    <>
      <PageWithTitle
        title={user.username}
        tabItems={tabItems}
        onTabChange={(tabId) => {
          navigate(tabItems[tabId].path);
        }}
      >
        <Outlet />
      </PageWithTitle>
      <div className="flex pt-[35px]">
        <ModalTrigger
          button={
            <Button
              className="btn ml-2 rounded-full text-base font-normal normal-case"
              color="success"
            >
              Follower
            </Button>
          }
        >
          <FollowerModal />
        </ModalTrigger>
        <FiberManualRecord className="self-center text-[5px]"></FiberManualRecord>
        <ModalTrigger
          button={
            <Button
              className="btn ml-2 rounded-full text-base font-normal normal-case"
              color="success"
            >
              Following
            </Button>
          }
        >
          <FollowingModal />
        </ModalTrigger>
      </div>

      <div className="flex justify-center">
        <div className="mx-4 max-w-[700px] basis-[700px]">
          <div className="mt-[45px] mb-5 border-b border-black"></div>
          <div>
            <h2 className="text-xl font-normal">
              Get an email whenever {user.username} publishes.
            </h2>
            <p className="mt-2 pb-5 text-sm">
              You cannot subscribe to yourself
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
