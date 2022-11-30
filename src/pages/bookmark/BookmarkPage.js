import PageWithTitle from "../../components/PageWithTitle";
import { PostList } from "../../features/post";
import { useQuery, useQueryClient } from "react-query";
import { getPosts } from "../../api/postApi";
// import { useSelector } from "react-redux";
import { getBookmarksByUserId } from "../../api/bookmarkApi";
import { toast } from "react-toastify";

const BookmarkPage = () => {
  // const { data } = useQuery("posts", getPosts, {}, []);
  const queryClient = useQueryClient();

  const res = useQuery("bookmarks", getBookmarksByUserId, {
    onError: (err) => {
      console.log("err re", err);
      toast.error(err.message);
    },
  });

  const bookmark = queryClient.getQueryData("bookmarks");
  console.log("book ", res);

  return (
    <PageWithTitle title="Bookmark">
      <div>
        <div className="flex justify-center">
          <div className="mx-4 max-w-[700px] basis-[700px]">
            <PostList postList={bookmark?.posts} />
          </div>
        </div>
      </div>
    </PageWithTitle>
  );
};

export default BookmarkPage;
