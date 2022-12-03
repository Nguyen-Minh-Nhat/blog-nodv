import { useSelector } from "react-redux";
import { CommentIcon, DotIcon } from "../../../../components/Icons";
import IconWrapper from "../../../../components/IconWrapper";
import LikeButton from "../../../../components/LikeButton";
import Number from "../../../../components/Number";
import AuthClick from "../../../auth/components/AuthClick";

const PostActionBar = ({ post, onComment, onLike, onUnlike }) => {
  const userId = useSelector((state) => state.user?.data?.info?.id);
  const isLiked = post?.userLikeIds?.includes(userId);

  const handleLike = (isLike) => {
    if (isLike) {
      onLike(post.id);
    } else {
      onUnlike(post.id);
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
        {/* <Number>{comments.length > 0 ? comments.length : 0}</Number> */}
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
