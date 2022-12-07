import { memo, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentEditor from "../CommentEditor";
import CommentList from "../CommentList";
import CommentBody from "./CommentBody";
import CommentFooter from "./CommentFooter";
import CommentHeader from "./CommentHeader";
import QuestionDialog from "../../../../components/QuestionDialog";
import {
  addComment,
  removeComment,
  updateComment,
} from "../../../../redux/slices/commentSlice";
import { useMutation } from "react-query";
import {
  createComment,
  deleteComment,
  updateCommentApi,
} from "../../../../api/commentApi";
import { createNotification } from "../../../../api/notificationApi";
import { callApiCreateNotification } from "../../../../utils/generationNotification";
import { NotificationType } from "../../../../config/dataType";
import { updateCountNotifications } from "../../../../api/userApi";
import { setUser } from "../../../../redux/slices/userSlice";

const Comment = ({ comment, post }) => {
  const user = useSelector((state) => state.user.data.info);
  const replyComments = useSelector(
    (state) => state.comment.commentsByParentId[comment.id]
  );
  const rootComments = useSelector((state) => state.comment.list);
  const [isReply, setIsReply] = useState(false);
  const [isShowReply, setIsShowReply] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const isUser = useMemo(() => {
    return comment.userId === user.id;
  }, [comment.userId, user.id]);

  const handleCloseDialog = () => {
    setIsDelete(false);
  };
  const deleteCommentById = useMutation(deleteComment, {
    onSuccess: (data) => {
      dispatch(removeComment(data));
    },
  });
  const handleDeleteComment = (comment) => {
    deleteCommentById.mutate(comment.id);
  };

  const updateCommentById = useMutation(updateCommentApi, {
    onSuccess: (data) => {
      dispatch(updateComment(data));
    },
  });
  const handleUpdateComment = (comment) => {
    updateCommentById.mutate(comment);
    setIsEdit(false);
  };
  const createNewReplyComment = useMutation(createComment, {
    onSuccess: (data) => {
      dispatch(addComment(data));
    },
  });

  const updateUserIncreaseNumOfNotification = useMutation(
    updateCountNotifications
  );

  const createNewNotificationReplyComment = useMutation(createNotification);
  const getCommentUserId = (comment) => {
    var parentComment = rootComments.find(
      (commentParent) => comment.replyId === commentParent.id
    );
    return parentComment.userId;
  };
  const handleReply = (comment) => {
    createNewReplyComment.mutate(comment);
    let data = comment;
    data.commentParentUserId = getCommentUserId(comment);
    callApiCreateNotification(
      data,
      NotificationType.REPLYCOMMENT,
      createNewNotificationReplyComment,
      user.id
    );
    const Increase = {
      isIncrease: true,
      userId: data.commentParentUserId,
    };
    updateUserIncreaseNumOfNotification.mutate(Increase);
    setIsReply(false);
    setIsShowReply(true);
  };

  const handleConfirmDeleteComment = (comment) => {
    handleCloseDialog();
    handleDeleteComment(comment);
  };
  return (
    <>
      <div className="pt-6 pb-4">
        {isEdit ? (
          <div className="-mx-6">
            <CommentEditor
              hideHeader
              focus
              isEdit
              post={post}
              initialComment={comment}
              onCancel={() => setIsEdit(false)}
              onSubmit={handleUpdateComment}
            />
          </div>
        ) : (
          <>
            <CommentHeader
              comment={comment}
              isUser={isUser}
              onEdit={() => setIsEdit(true)}
              onDelete={() => setIsDelete(true)}
            />
            <CommentBody comment={comment} />
            <CommentFooter
              onComment={() => {
                setIsReply((prev) => !prev);
              }}
              onShowReply={() => setIsShowReply((prev) => !prev)}
              numReplyComments={replyComments?.length}
              isShowReply={isShowReply}
              comment={comment}
            />
          </>
        )}
      </div>

      {(isShowReply || isReply) && (
        <div className="mb-6 ml-3 border-l-2">
          {isReply && (
            <CommentEditor
              hideHeader
              focus
              onCancel={() => setIsReply(false)}
              initialComment={{
                replyId: comment.id,
              }}
              onSubmit={handleReply}
              post={post}
            />
          )}
          {isShowReply && replyComments?.length > 0 && (
            <CommentList comments={replyComments} post={post} />
          )}
        </div>
      )}

      <QuestionDialog
        open={isDelete}
        onCancel={handleCloseDialog}
        onConfirm={() => handleConfirmDeleteComment(comment)}
        title="Delete"
        message="Deleted comment are gone forever.Are you sure?"
        comment={comment}
      />
    </>
  );
};

export default memo(Comment);
