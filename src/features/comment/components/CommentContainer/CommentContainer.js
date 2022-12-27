import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { createComment, getComment } from "../../../../api/commentApi";
import { createNotification } from "../../../../api/notificationApi";
import { updateCountNotifications } from "../../../../api/userApi";
import { NotificationType } from "../../../../config/dataType";
import {
  addComment,
  removeComment,
  setComments,
  updateComment,
} from "../../../../redux/slices/commentSlice";
import { callApiCreateNotification } from "../../../../utils/generationNotification";
import CommentEditor from "../CommentEditor";
import CommentList from "../CommentList";
import CommentContainerHeader from "./CommentContainerHeader";

const CommentContainer = ({ post, onClose }) => {
  const dispatch = useDispatch();
  const socket = useSelector((state) => state.socket.data);
  const userId = useSelector((state) => state.user?.data?.info?.id);

  const rootComments = useSelector(
    (state) => state.comment.commentsByParentId[null]
  );

  useQuery(["comments", post.id], () => getComment(post.id), {
    onSuccess: (data) => {
      console.log("vo day lay comment");
      dispatch(setComments(data));
    },
  });
  const createNewComment = useMutation(createComment, {
    onSuccess: (data) => {
      // dispatch(addComment(data));
      let comment = { ...data, postUserId: post.userId };
      callApiCreateNotification(
        comment,
        NotificationType.COMMENT,
        createNewNotificationComment,
        userId
      );
    },
  });

  const updateUserIncreaseNumOfNotification = useMutation(
    updateCountNotifications
  );

  const createNewNotificationComment = useMutation(createNotification, {
    onSuccess: (data) => {
      const increase = { isIncrease: true, userId: data.receiverId };
      updateUserIncreaseNumOfNotification.mutate(increase);
    },
  });
  const handleCreateComment = (comment) => {
    createNewComment.mutate(comment);
  };
  const initialComment = {};
  const updateLocalListComment = (updatedComment) => {
    dispatch(addComment(updatedComment));
  };
  const handleReceiveCommentSocket = (payload) => {
    const comment = JSON.parse(payload.body);
    updateLocalListComment(comment);
  };
  const updateLocalComment = (updatedComment) => {
    dispatch(updateComment(updatedComment));
  };
  const handleReceiveUpdateCommentSocket = (payload) => {
    const comment = JSON.parse(payload.body);
    updateLocalComment(comment);
  };

  const handleDeleteCommentSocket = (payload) => {
    dispatch(removeComment(payload.body));
  };

  const updateLocalLikeComment = (updatedComment) => {
    dispatch(updateComment(updatedComment));
  };
  const handleUpdateLikeCommentSocket = (payload) => {
    const updatedComment = JSON.parse(payload.body);
    updateLocalLikeComment(updatedComment);
  };

  useEffect(() => {
    const topic = `/topic/posts/${post?.id}/comment`;
    const update = `/topic/posts/${post?.id}/updatecomment`;
    const deleteComment = `/topic/deletecomment`;
    const likeComment = `/topic/likecomment`;
    const unlikeComment = `/topic/unlikecomment`;

    if (socket) {
      socket.subscribe(topic, handleReceiveCommentSocket, { id: topic });
      socket.subscribe(update, handleReceiveUpdateCommentSocket, {
        id: update,
      });
      socket.subscribe(deleteComment, handleDeleteCommentSocket, {
        id: deleteComment,
      });
      socket.subscribe(likeComment, handleUpdateLikeCommentSocket, {
        id: likeComment,
      });
      socket.subscribe(unlikeComment, handleUpdateLikeCommentSocket, {
        id: unlikeComment,
      });
    }
    return () => {
      if (socket) {
        socket.unsubscribe(topic);
        socket.unsubscribe(update);
        socket.unsubscribe(deleteComment);
        socket.unsubscribe(likeComment);
        socket.unsubscribe(unlikeComment);
      }
    };
  }, [post?.id, socket]);

  return (
    <div className="w-[414px]">
      <CommentContainerHeader onClose={onClose} />
      <CommentEditor
        initialComment={initialComment}
        onSubmit={handleCreateComment}
        post={post}
      />
      {rootComments != null && rootComments.length > 0 && (
        <div className="mt-4">
          <CommentList comments={rootComments} post={post} />
        </div>
      )}
    </div>
  );
};

export default CommentContainer;
