import { useQuery } from "react-query";
import { getPosts } from "../../api/postApi";
import { PostList } from "../../features/post";
import Header from "./components/Header";
import { getPostIdsBookmark, getBookmarkByUserId } from "../../api/bookmarkApi";
import { useSelector, useDispatch } from "react-redux";
import { setBookmark } from "../../redux/slices/bookmarkSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { data: posts } = useQuery("posts", getPosts);
  const postIdsBookmark = useSelector((state) => state.bookmark.postIds);

  useQuery("bookmark", getBookmarkByUserId, {
    onSuccess: (data) => {
      dispatch(setBookmark(data));
    },
  });

  return (
    <>
      <div className="sticky top-0 z-10 bg-white pt-6">
        <Header />
      </div>
      <Main>
        <PostList postList={posts} postIdsBookmark={postIdsBookmark} />
      </Main>
    </>
  );
};

const Main = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="mx-4 max-w-[700px] basis-[700px] pt-12">{children}</div>
    </div>
  );
};

export default HomePage;
