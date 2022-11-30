import { Link } from "react-router-dom";
import PostPreviewFooter from "./PostPreviewFooter";
import PostThumbnail from "./PostThumbnail";

const PostPreviewBody = ({ post, ...menuActionProps }) => {
  const postLink = `/post/${post.id}`;
  return (
    <div className="mt-3 flex">
      <div className="flex-1">
        <Link to={postLink}>
          <Title>{post.title}</Title>
          <Subtitle>{post.subtitle}</Subtitle>
        </Link>
        <PostPreviewFooter post={post} {...menuActionProps} />
      </div>
      <Link to={postLink}>
        <div className="ml-14 ">
          <PostThumbnail src={post.thumbnail} />
        </div>
      </Link>
    </div>
  );
};

export default PostPreviewBody;

const Title = ({ children }) => {
  return (
    <div className="flex">
      <h3 className="mb-2 text-[22px] font-bold">{children}</h3>
    </div>
  );
};

const Subtitle = ({ children }) => {
  return (
    <div>
      <p className="max-h-[72px] text-slate-600 line-clamp-3">{children}</p>
    </div>
  );
};
