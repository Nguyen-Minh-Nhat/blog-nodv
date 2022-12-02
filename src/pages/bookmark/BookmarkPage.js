import PageWithTitle from "../../components/PageWithTitle";
import { PostList } from "../../features/post";
import { useQuery, useQueryClient } from "react-query";
import { getBookmarkByUserId } from "../../api/bookmarkApi";
import { useDispatch, useSelector } from "react-redux";
import { setBookmark } from "../../redux/slices/bookmarkSlice";

const BookmarkPage = () => {
  const queryClient = new useQueryClient();
  const dispatch = useDispatch();

  // const bookmark = queryClient.getQueryData("bookmark");
  const bookmark = useSelector((state) => state.bookmark);

  useQuery("bookmark", getBookmarkByUserId, {
    onSuccess: (data) => {
      dispatch(setBookmark(data));
    },
  });
  // console.log("bookmark post", bookmark.posts);

  return (
    <PageWithTitle title="Bookmark">
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
    </PageWithTitle>
  );
};

export default BookmarkPage;
