import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { updatePostToBookmark } from "../../api/bookmarkApi";
import { createNotification } from "../../api/notificationApi";
import {
  deletePost,
  getPostById,
  likePost,
  publishPost,
  unLikePost,
  unpublishPost,
} from "../../api/postApi";
import { updateCountNotifications } from "../../api/userApi";
import { NotificationType } from "../../config/dataType";
import Post from "../../features/post/components/Post";
import { updatePostByIdToBookmark } from "../../redux/slices/bookmarkSlice";
import { setProfile } from "../../redux/slices/profileSlice";
import { callApiCreateNotification } from "../../utils/generationNotification";
import Main from "./components/Main";

const PostPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const socket = useSelector((state) => state.socket.data);
  const postIdsBookmark = useSelector((state) => state.bookmark.postIds);

  const queryClient = useQueryClient();

  const post = queryClient.getQueryData(["post", id]);
  const userId = useSelector((state) => state.user.data?.info?.id);

  useQuery(["post", id], () => getPostById(id), {
    onSuccess: (data) => {
      dispatch(setProfile(data.user));
    },
    onError: (error) => {
      if (error.response.status === 404) {
        window.location.href = "/404";
      }
    },
  });

  const updateLocalPost = (updatedPost) => {
    queryClient.setQueryData(["post", id], (oldPost) => {
      return {
        ...oldPost,
        ...updatedPost,
      };
    });
  };

  const deletePostMutation = useMutation(deletePost, {
    onSuccess: () => {
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
      toast.success("Post was unpublished");
    },
  });
  const createNotificationLikePostMutation = useMutation(createNotification, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
  const updateUserIncreaseNumOfNotification = useMutation(
    updateCountNotifications
  );
  const likePostMutation = useMutation(likePost, {
    onSuccess: (data) => {
      queryClient.setQueryData(["post", post.id], data);
      callApiCreateNotification(
        data,
        NotificationType.LIKE,
        createNotificationLikePostMutation,
        userId
      );
      const Increase = {
        isIncrease: true,
        userId: data.userId,
      };
      updateUserIncreaseNumOfNotification.mutate(Increase);
    },
  });

  const unlikePostMutation = useMutation(unLikePost, {
    onSuccess: (data) => {
      queryClient.setQueryData(["post", post.id], data);
    },
  });

  const updateBookmarkMutation = useMutation(updatePostToBookmark, {
    onSuccess: (data) => {
      // console.log("data ", data);
      dispatch(updatePostByIdToBookmark(data));
    },
  });

  const handleReceiveLikePostSocket = (payload) => {
    // console.log(payload);
    const { userLikeIds } = JSON.parse(payload.body);
    updateLocalPost({ userLikeIds: userLikeIds });
  };

  useEffect(() => {
    const topic = `/topic/posts/${post?.id}/like`;
    if (socket) {
      socket.subscribe(topic, handleReceiveLikePostSocket, { id: topic });
    }
    return () => {
      if (socket) {
        console.log("unsubscribing");
        socket.unsubscribe(topic);
      }
    };
  }, [post?.id, socket]);

  return (
    <div className="flex flex-col">
      <Main>
        {post && (
          <Post
            post={post}
            isBookmarked={postIdsBookmark?.includes(post.id)}
            onUpdateBookmark={updateBookmarkMutation.mutate}
            onPublish={publishPostMutation.mutate}
            onDelete={deletePostMutation.mutate}
            onUnpublish={unpublishPostMutation.mutate}
            onLike={likePostMutation.mutate}
            onUnlike={unlikePostMutation.mutate}
          />
        )}
      </Main>
    </div>
  );
};

export default PostPage;
