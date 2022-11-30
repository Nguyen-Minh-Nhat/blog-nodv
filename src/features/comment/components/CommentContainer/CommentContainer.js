import { useMutation, useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { addComment, setComments } from "../../../../redux/slices/commentSlice";
import { createComment, getComment } from "../../../../api/commentApi";
import CommentEditor from "../CommentEditor";
import CommentList from "../CommentList";
import CommentContainerHeader from "./CommentContainerHeader";

const CommentContainer = ({ post, onClose }) => {
  const dispatch = useDispatch();
  const rootComments = useSelector(
    (state) => state.comment.commentsByParentId[null]
  );

  useQuery("comments", () => getComment(post.id), {
    onSuccess: (data) => {
      dispatch(setComments(data));
    },
  });
  const createNewComment = useMutation(createComment);
  const handleCreateComment = (comment) => {
    createNewComment.mutate(comment);
    dispatch(addComment(comment));
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
          <CommentList comments={rootComments} />
        </div>
      )}
    </div>
  );
};

export default CommentContainer;
