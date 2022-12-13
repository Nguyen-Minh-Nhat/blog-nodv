import { useDispatch, useSelector } from "react-redux";
import { getBookmarkByUserId } from "../../api/bookmarkApi";
import { getListPostHided, getPosts } from "../../api/postApi";
import { PostList } from "../../features/post";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import { setBookmark } from "../../redux/slices/bookmarkSlice";
import Header from "./components/Header";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { useState } from "react";

const LIMIT = 5;
const HomePage = () => {
  const { tab } = useParams(); //get tab from url
  const storeKey = ["posts", tab]; //key for react-query
  const dispatch = useDispatch();

  const { data: posts } = useQuery(
    storeKey,
    () => getPosts({ topic: tab, limit: LIMIT }),
    {
      refetchOnWindowFocus: false,
    }
  ); //get posts from api by tab

  const queryClient = useQueryClient();

  const postIdsBookmark = useSelector((state) => state.bookmark.postIds);

  useQuery("bookmark", getBookmarkByUserId, {
    onSuccess: (data) => {
      dispatch(setBookmark(data));
    },
  });

  const { isHasMore, handleFetchMore, setIsHasMore, setPage } =
    useInfiniteScroll(
      getPosts,
      (data) => {
        queryClient.setQueryData(storeKey, (oldData) => {
          return [...oldData, ...data];
        });
      },
      LIMIT
    ); // get more posts when scroll to bottom

  useEffect(() => {
    setPage(0);
    setIsHasMore(true);
  }, [tab]); // reset page and isHasMore when tab change
  const [hidePost, setHidePost] = useState([]);
  useQuery("hidePost", () => getListPostHided(), {
    onSuccess: (data) => {
      setHidePost(data);
    },
    onError: (err) => {
      console.log("err re", err);
    },
  });
  return (
    <InfiniteScroll
      dataLength={posts?.length || 0}
      next={() => handleFetchMore({ topic: tab })}
      hasMore={isHasMore}
      endMessage={
        <div className="py-10">
          <p className="text-center font-thin">Yay! You have seen it all</p>
        </div>
      }
    >
      <div className="sticky top-0 z-10 bg-white pt-6">
        <Header />
      </div>
      <Main>
        <PostList
          postList={posts}
          storeKey={storeKey}
          postIdsBookmark={postIdsBookmark}
          postIdsHide={hidePost}
        />
      </Main>
    </InfiniteScroll>
  );
};

const Main = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="mx-4 max-w-[700px] basis-[700px] pt-12">{children}</div>
    </div>
  );
};

const EndMessage = () => (
  <div className="py-10">
    <p className="text-center font-thin">Yay! You have seen it all</p>
  </div>
);

export default HomePage;
