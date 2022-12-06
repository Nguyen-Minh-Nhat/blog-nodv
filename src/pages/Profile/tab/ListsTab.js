import React from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { getBookmarkByUserId } from "../../../api/bookmarkApi";
import { PostList } from "../../../features/post";
import { setBookmark } from "../../../redux/slices/bookmarkSlice";

const ListTab = () => {
  const dispatch = useDispatch();
  const bookmark = useSelector((state) => state.bookmark);

  useQuery("bookmark", getBookmarkByUserId, {
    onSuccess: (data) => {
      dispatch(setBookmark(data));
    },
  });
  return (
    <div>
      <div className="flex justify-center">
        <div className="mx-4 max-w-[700px] basis-[700px]">
          <PostList
            postList={bookmark?.posts}
            postIdsBookmark={bookmark?.postIds}
          />
        </div>
      </div>
    </div>
  );
};

export default ListTab;
