import Comment from "../Comment";

const CommentList = ({ comments, post }) => {
  return (
    <div className="mx-6">
      {comments?.map((comment) => (
        <div key={comment.id} className="border-b last:border-b-0">
          <Comment post={post} comment={comment} />
        </div>
      ))}
    </div>
  );
};

export default CommentList;
