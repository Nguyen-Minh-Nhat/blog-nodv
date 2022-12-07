import { useMutation, useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { createComment, getComment } from "../../../../api/commentApi";
import { createNotification } from "../../../../api/notificationApi";
import { updateCountNotifications } from "../../../../api/userApi";
import { NotificationType } from "../../../../config/dataType";
import { addComment, setComments } from "../../../../redux/slices/commentSlice";
import { callApiCreateNotification } from "../../../../utils/generationNotification";
import CommentEditor from "../CommentEditor";
import CommentList from "../CommentList";
import CommentContainerHeader from "./CommentContainerHeader";

const CommentContainer = ({ post, onClose }) => {
  const dispatch = useDispatch();
  const rootComments = useSelector(
    (state) => state.comment.commentsByParentId[null]
  );
  const { id: userId } = useSelector((state) => state.user.data.info);
  useQuery(["comments", post.id], () => getComment(post.id), {
    onSuccess: (data) => {
      dispatch(setComments(data));
    },
  });
  const createNewComment = useMutation(createComment, {
    onSuccess: (data) => {
      dispatch(addComment(data));
    },
  });
  const updateUserIncreaseNumOfNotification = useMutation(
    updateCountNotifications
  );
  const createNewNotificationComment = useMutation(createNotification);
  const handleCreateComment = (comment) => {
    createNewComment.mutate(comment);
    const data = comment;
    data.postUserId = post.userId;
    callApiCreateNotification(
      comment,
      NotificationType.COMMENT,
      createNewNotificationComment,
      userId
    );
    const Increase = {
      isIncrease: true,
      userId: data.postUserId,
    };
    updateUserIncreaseNumOfNotification.mutate(Increase);
  };
  const initialComment = {};

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
