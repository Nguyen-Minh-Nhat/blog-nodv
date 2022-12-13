import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import post from "..";
import { updatePostToBookmark } from "../../../api/bookmarkApi";
import {
  deletePost,
  hidePost,
  publishPost,
  unpublishPost,
} from "../../../api/postApi";
import PostPreview from "./PostPreview";

export const PostList = ({
  postList = [],
  storeKey = "posts",
  postIdsHide = [],
}) => {
  const queryClient = useQueryClient();
  const postIdsBookmark = queryClient.getQueryData("bookmark")?.postIds;
  // console.log(postIdsBookmark);
  const postIdHide = queryClient.getQueryData("hide")?.postIds;
  console.log(postIdHide);

  const updateLocalPost = (updatedPost) => {
    queryClient.setQueryData(storeKey, (oldData) =>
      oldData.map((post) => {
        if (post.id === updatedPost.id) {
          return updatedPost;
        }
        return post;
      })
    );
  };
  const deleteLocalPost = (postId) => {
    queryClient.setQueryData(storeKey, (oldData) => {
      const newPostList = oldData.filter((post) => post.id !== postId);
      console.log(newPostList);
      return newPostList;
    });
  };
  const deletePostMutation = useMutation(deletePost, {
    onSuccess: (id) => {
      deleteLocalPost(id);
      toast.success("Post deleted successfully");
    },
  });

  const publishPostMutation = useMutation(publishPost, {
    onSuccess: (data) => {
      updateLocalPost(data);
      toast.success("Post was published");
    },
  });

  const unpublishPostMutation = useMutation(unpublishPost, {
    onSuccess: (data) => {
      updateLocalPost(data);
      toast.success("Post was unpublished ");
    },
  });

  const updateBookmarkMutation = useMutation(updatePostToBookmark, {
    onSuccess: (data) => {
      console.log("posIdBook", data);
      queryClient.setQueryData("bookmark", { postIds: data });
    },
  });

  const hidePostMutation = useMutation(hidePost, {
    onSuccess: (id) => {
      deleteLocalPost(id.pop());
    },
  });
  return (
    <div className="flex flex-col">
      {postList?.length ? (
        postList?.map((post) => (
          <div
            key={post.id}
            className={`${
              postIdsHide?.includes(post.id) ? "hidden" : ""
            } border-b pt-8 first:pt-0`}
          >
            <PostPreview
              post={post}
              isBookmarked={postIdsBookmark?.includes(post.id)}
              onUpdateBookmark={updateBookmarkMutation.mutate}
              onDelete={deletePostMutation.mutate}
              onPublish={publishPostMutation.mutate}
              onUnpublish={unpublishPostMutation.mutate}
              onHidePost={hidePostMutation.mutate}
            />
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500">No posts found</div>
      )}
    </div>
  );
};

export default PostList;
