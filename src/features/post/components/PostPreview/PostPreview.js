import PostPreviewBody from "./PostPreviewBody";
import PostPreviewHeader from "./PostPreviewHeader";
const PostPreview = ({ post, isBookmarked, ...menuActionProps }) => {
  return (
    <div>
      <PostPreviewHeader post={post} />
      <PostPreviewBody
        post={post}
        isBookmarked={isBookmarked}
        {...menuActionProps}
      />
    </div>
  );
};

export default PostPreview;
