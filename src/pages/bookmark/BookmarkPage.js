import PageWithTitle from "../../components/PageWithTitle";
import { PostList } from "../../features/post";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getBookmarkByUserId } from "../../api/bookmarkApi";
import { useDispatch, useSelector } from "react-redux";
import { setBookmark } from "../../redux/slices/bookmarkSlice";
import { hidePost } from "../../api/postApi";
import { toast } from "react-toastify";

const BookmarkPage = () => {
  const queryClient = new useQueryClient();
  const dispatch = useDispatch();

  // const bookmark = queryClient.getQueryData("bookmark");
  const bookmark = useSelector((state) => state.bookmark);
  const { isLogin } = useSelector((state) => state.user.data);


  // useQuery(["bookmark"], getBookmarkByUserId, {
  //   onSuccess: (data) => {
  //     console.log("bookmakr page ", data);
  //     // if (!bookmark.postIds.length) {
  //     dispatch(setBookmark(data));
  //     // }
  //   },
  // });

  return (
    <PageWithTitle title="Bookmark">
      <div>
        <div className="flex justify-center">
          <div className="mx-4 max-w-[700px] basis-[700px]">
            <PostList
              postList={bookmark?.posts}
              postIdsBookmark={bookmark?.postIds}
              // onHidePost={hidePostMutation.mutate}
            />
          </div>
        </div>
      </div>
    </PageWithTitle>
  );
};

export default BookmarkPage;
