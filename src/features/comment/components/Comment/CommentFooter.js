import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { likeComment, unlikeComment } from "../../../../api/commentApi";
import IconWrapper from "../../../../components/IconWrapper";
import LikeButton from "../../../../components/LikeButton";
import Number from "../../../../components/Number";
import { updateComment } from "../../../../redux/slices/commentSlice";
import AuthClick from "../../../auth/components/AuthClick";

const CommentFooter = ({
  onComment,
  onShowReply,
  numReplyComments = 0,
  isShowReply,
  comment,
}) => {
  const userId = useSelector((state) => state.user?.data?.info?.id);
  const isLiked = comment?.userlikeids?.includes(userId);
  const dispatch = useDispatch();

  const likeCommentMutation = useMutation(likeComment, {
    onSuccess: (data) => {
      dispatch(updateComment(data));
    },
  });
  const unlikeCommentMutation = useMutation(unlikeComment, {
    onSuccess: (data) => {
      dispatch(updateComment(data));
    },
  });

  const handleLike = (isLike) => {
    if (isLike) {
      likeCommentMutation.mutate(comment.id);
    } else {
      unlikeCommentMutation.mutate(comment.id);
    }
  };
  return (
    <div className="flex justify-between text-slate-600">
      <div className="flex gap-4">
        <div className="flex cursor-pointer items-center hover:text-black">
          <AuthClick>
            <LikeButton isLiked={isLiked} onClick={handleLike} />
          </AuthClick>
          <Number>
            {comment?.userlikeids ? comment.userlikeids.length : 0}
          </Number>
        </div>
        {numReplyComments > 0 && (
          <div
            className="flex cursor-pointer items-center hover:text-black"
            onClick={onShowReply}
          >
            <IconWrapper>
              <i className="fa-light fa-comments text-[18px]"></i>
            </IconWrapper>
            <span className="ml-1 mt-1 text-sm">
              {isShowReply ? "Hide Reply" : numReplyComments + " Reply"}
            </span>
          </div>
        )}
      </div>
      <div
        className="flex cursor-pointer items-center hover:text-black"
        onClick={onComment}
      >
        <IconWrapper>
          <i className="fa-light fa-reply"></i>
        </IconWrapper>
        <span className="ml-1 mt-1 text-sm">Reply</span>
      </div>
    </div>
  );
};

export default CommentFooter;
