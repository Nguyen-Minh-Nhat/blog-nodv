import { useState } from "react";
import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { createNotification } from "../../api/notificationApi";
import {
  deletePost,
  getListPostHided,
  getPostById,
  getPosts,
  likePost,
  publishPost,
  unLikePost,
  unpublishPost,
} from "../../api/postApi";
import { getUsersNotFollow } from "../../api/userApi";
import { NotificationType } from "../../config/dataType";
import Post from "../../features/post/components/Post";
import { setUser } from "../../redux/slices/userSlice";
import { callApiCreateNotification } from "../../utils/generationNotification";
import Header from "./components/Header";
import Main from "./components/Main";

const PostPage = () => {
  const { id } = useParams();

  const socket = useSelector((state) => state.socket.data);

  const queryClient = useQueryClient();

  const post = queryClient.getQueryData(["post", id]);
  console.log(post);

  const userId = useSelector((state) => state.user.data.info.id);
  // const dispatch = useDispatch();

  // const { data: test } = useQuery("test1", () => getListPostHided());

  useQuery(["post", id], () => getPostById(id), {
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
  const likePostMutation = useMutation(likePost, {
    onSuccess: (data) => {
      queryClient.setQueryData(["post", post.id], data);
      callApiCreateNotification(
        data,
        NotificationType.LIKE,
        createNotificationLikePostMutation,
        userId
      );
    },
  });

  const unlikePostMutation = useMutation(unLikePost, {
    onSuccess: (data) => {
      queryClient.setQueryData(["post", post.id], data);
    },
  });

  const handleReceiveLikePostSocket = (payload) => {
    console.log(payload);
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
      <Header />
      <Main>
        {post && (
          <Post
            post={post}
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
