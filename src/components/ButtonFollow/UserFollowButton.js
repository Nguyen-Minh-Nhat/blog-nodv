import { useMutation } from "react-query";
import { createNotification } from "../../api/notificationApi";
import {
  followUser,
  unFollowUser,
  updateCountNotifications,
} from "../../api/userApi";
import { NotificationType } from "../../config/dataType";
import { callApiCreateNotification } from "../../utils/generationNotification";
import ButtonFollow from "./ButtonFollow";
const UserFollowButton = ({ id, userId, onUpdate, ...props }) => {
  const createNotificationMutation = useMutation(createNotification, {
    onSuccess: (data) => {
      const Increase = {
        isIncrease: true,
        userId: data.receiverId,
      };
      updateUserIncreaseNumOfNotification.mutate(Increase);
    },
  });

  const followUserMutation = useMutation(followUser, {
    onSuccess: (data) => {
      onUpdate(data);
      //   console.log("data ", data);
      callApiCreateNotification(
        data,
        NotificationType.FOLLOW,
        createNotificationMutation,
        userId
      );
    },
  });

  const unFollowUserMutation = useMutation(unFollowUser, {
    onSuccess: (data) => {
      onUpdate(data);
    },
  });
  const updateUserIncreaseNumOfNotification = useMutation(
    updateCountNotifications
  );

  const handleFollow = (data, isFollow) => {
    if (isFollow) {
      followUserMutation.mutate(data);
    } else {
      unFollowUserMutation.mutate(data);
    }
  };

  return (
    <ButtonFollow
      onClick={(state) => {
        handleFollow(id, state);
      }}
      {...props}
    />
  );
};

export default UserFollowButton;
