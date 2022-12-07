import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { getOwnedPosts } from "../../../api/postApi";
import { PostList } from "../../../features/post";

const HomeTab = () => {
  const queryClient = useQueryClient();
  useQuery("stories", () => getOwnedPosts());
  const data = queryClient.getQueryData("stories");
  return (
    <div className="flex justify-center">
      <div className="mx-4 max-w-[700px] basis-[700px] pt-12">
        <PostList postList={data} storeKey={"stories"} />
      </div>
    </div>
  );
};

export default HomeTab;
