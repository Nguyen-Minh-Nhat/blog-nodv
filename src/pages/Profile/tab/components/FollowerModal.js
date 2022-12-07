import { Avatar } from "@mui/material";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createNotification } from "../../../../api/notificationApi";
import {
  followUser,
  getAllUsersFollower,
  unFollowUser,
  updateCountNotifications,
} from "../../../../api/userApi";
import ButtonFollow from "../../../../components/ButtonFollow/ButtonFollow";
import { NotificationType } from "../../../../config/dataType";
import { callApiCreateNotification } from "../../../../utils/generationNotification";

const FollowerModal = () => {
  const userId = useSelector((state) => state.user?.data?.info?.id);
  const queryClient = useQueryClient();
  const usersFollower = queryClient.getQueryData("usersFollower");
  useQuery("usersFollower", () => getAllUsersFollower());
  const updateUsers = (updatedFollower) => {
    queryClient.setQueryData("follows", (oldData) =>
      oldData.map((follow) => {
        if (follow.id === updatedFollower.id) {
          return updatedFollower;
        }
        return follow;
      })
    );
  };
  const followUserMutation = useMutation(followUser, {
    onSuccess: (data) => {
      updateUsers(data);
    },
  });
  const unFollowUserMutation = useMutation(unFollowUser, {
    onSuccess: (data) => {
      updateUsers(data);
    },
  });
  const createNotificationMutation = useMutation(createNotification);
  const updateUserIncreaseNumOfNotification = useMutation(
    updateCountNotifications
  );
  const handleFollow = (data, isFollow) => {
    if (isFollow) {
      followUserMutation.mutate(data);
      callApiCreateNotification(
        data,
        NotificationType.FOLLOW,
        createNotificationMutation,
        userId
      );
      const Increase = {
        isIncrease: true,
        userId: data,
      };
      updateUserIncreaseNumOfNotification.mutate(Increase);
    } else {
      unFollowUserMutation.mutate(data);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="mx-4 w-[650px] basis-[700px] p-6">
        <div className="bg-white p-6">
          <h2 className="m-0 block text-base font-semibold leading-5">
            Followers
          </h2>

          {usersFollower &&
            usersFollower.map((item) => (
              <div
                className="relative mb-5 flex w-full items-center justify-between pt-4"
                key={item.id}
              >
                <div className="container-left flex items-center">
                  <Link to={`/users/${item.id}`}>
                    <Avatar
                      src={item?.avatar}
                      className="h-12 w-12"
                      alt={item.username}
                    />
                  </Link>
                  <Link to={`/users/${item.id}`}>
                    <div className="ml-4 mr-2 block">
                      <h2 className="break-all text-base font-medium">
                        {item.username}
                      </h2>
                    </div>
                  </Link>
                </div>
                <div>
                  <ButtonFollow
                    isFollowed={item?.followerId?.includes(userId)}
                    onClick={(state) => {
                      handleFollow(item.id, state);
                    }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FollowerModal;
