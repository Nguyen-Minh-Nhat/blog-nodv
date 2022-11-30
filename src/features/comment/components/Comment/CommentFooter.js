import IconWrapper from "../../../../components/IconWrapper";

const CommentFooter = ({
  onComment,
  onShowReply,
  numReplyComments = 0,
  isShowReply,
}) => {
  return (
    <div className="flex justify-between text-slate-600">
      <div className="flex gap-4">
        <div className="flex cursor-pointer items-center hover:text-black">
          <IconWrapper>
            <i className="fa-light fa-hands-clapping text-[18px]"></i>
          </IconWrapper>
          <span className="ml-1 mt-1 text-sm">0</span>
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
