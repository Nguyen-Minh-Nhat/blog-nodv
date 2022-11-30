import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { createNotification } from "../../../../api/notificationApi";
import { likePost, unLikePost } from "../../../../api/postApi";
import { CommentIcon, DotIcon } from "../../../../components/Icons";
import IconWrapper from "../../../../components/IconWrapper";
import LikeButton from "../../../../components/LikeButton";
import Number from "../../../../components/Number";
import AuthClick from "../../../auth/components/AuthClick";

const PostActionBar = ({ post, onComment }) => {
  const userId = useSelector((state) => state.user?.data?.info?.id);
  const isLiked = post?.userLikeIds?.includes(userId);
  const queryClient = useQueryClient();
  const [notification, setNotification] = useState({
    link: `/posts/${post.id}`,
    receiverId: `${post.userId}`,
    type: "LIKE",
  });

  const likePostMutation = useMutation(likePost, {
    onSuccess: (data) => {
      queryClient.setQueryData(["post", post.id], data);
    },
  });

  const unlikePostMutation = useMutation(unLikePost, {
    onSuccess: (data) => {
      queryClient.setQueryData(["post", post.id], data);
    },
  });
  const createNotificationLikePostMutation = useMutation(createNotification, {
    onSuccess: (data) => {
      console.log(data.data);
    },
  });

  const handleLike = (isLike) => {
    if (isLike) {
      likePostMutation.mutate(post.id);
      createNotificationLikePostMutation.mutate(notification);
    } else {
      unlikePostMutation.mutate(post.id);
    }
  };
  return (
    <div className="flex h-10 items-center rounded-full bg-white px-4 font-thin text-[#757575] shadow">
      <ButtonAction>
        <AuthClick>
          <LikeButton isLiked={isLiked} onClick={handleLike} />
        </AuthClick>
        <Number>{post?.userLikeIds ? post.userLikeIds.length : 0}</Number>
      </ButtonAction>

      <DivideLine></DivideLine>

      <ButtonAction onClick={onComment}>
        <IconWrapper>
          <CommentIcon />
        </IconWrapper>
        <Number>{0}</Number>
      </ButtonAction>

      <DivideLine></DivideLine>

      <ButtonAction>
        <DotIcon />
      </ButtonAction>
    </div>
  );
};

const DivideLine = () => <div className="mx-4 font-thin opacity-60">|</div>;

const ButtonAction = ({ children, onClick = () => {} }) => {
  return (
    <div
      className="flex cursor-pointer items-center hover:text-black"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default PostActionBar;
