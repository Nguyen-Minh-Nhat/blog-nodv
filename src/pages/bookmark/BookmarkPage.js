import { Button } from "@mui/material";
import ModalTrigger from "../../components/ModalTrigger";
import PageWithTitle from "../../components/PageWithTitle";
import { BookmarkStackList } from "../../features/bookmark";
import BookmarkListEditor from "../../features/bookmark/components/BookmarkListEditor";
import { PostList } from "../../features/post";
import { useQuery } from "react-query";
import { getPosts } from "../../api/postApi";
import { useSelector } from "react-redux";
import { getBookmarksByUserId } from "../../api/bookmarkApi";

const bookmarkStackList = [
  {
    id: 1,
    name: "new 1",
    postList: [
      {
        id: 1,
        thumbnail:
          "https://miro.medium.com/fit/c/140/140/1*AmSI1OyNQJqTBBkAD5jUGg.png",
      },
      {
        id: 2,
        thumbnail: "https://miro.medium.com/max/828/0*ITCatxekJnNvC7s7",
      },
      {
        id: 3,
        thumbnail:
          "https://miro.medium.com/fit/c/140/140/1*AmSI1OyNQJqTBBkAD5jUGg.png",
      },
    ],
  },
  {
    id: 2,

    name: "new 2",
    postList: [
      {
        id: 1,
        thumbnail:
          "https://miro.medium.com/fit/c/140/140/1*AmSI1OyNQJqTBBkAD5jUGg.png",
      },
      {
        id: 2,
        thumbnail: "https://miro.medium.com/max/828/0*ITCatxekJnNvC7s7",
      },
      {
        id: 3,
        thumbnail:
          "https://miro.medium.com/fit/c/140/140/1*AmSI1OyNQJqTBBkAD5jUGg.png",
      },
    ],
  },
  {
    id: 2,

    name: "new 2",
    postList: [
      {
        id: 1,
        thumbnail:
          "https://miro.medium.com/fit/c/140/140/1*AmSI1OyNQJqTBBkAD5jUGg.png",
      },
      {
        id: 2,
        thumbnail: "https://miro.medium.com/max/828/0*ITCatxekJnNvC7s7",
      },
      {
        id: 3,
        thumbnail:
          "https://miro.medium.com/fit/c/140/140/1*AmSI1OyNQJqTBBkAD5jUGg.png",
      },
    ],
  },
  {
    id: 2,

    name: "new 2",
    postList: [
      {
        id: 1,
        thumbnail:
          "https://miro.medium.com/fit/c/140/140/1*AmSI1OyNQJqTBBkAD5jUGg.png",
      },
      {
        id: 2,
        thumbnail: "https://miro.medium.com/max/828/0*ITCatxekJnNvC7s7",
      },
      {
        id: 3,
        thumbnail:
          "https://miro.medium.com/fit/c/140/140/1*AmSI1OyNQJqTBBkAD5jUGg.png",
      },
    ],
  },
  {
    id: 2,

    name: "new 2",
    postList: [
      {
        id: 1,
        thumbnail:
          "https://miro.medium.com/fit/c/140/140/1*AmSI1OyNQJqTBBkAD5jUGg.png",
      },
      {
        id: 2,
        thumbnail: "https://miro.medium.com/max/828/0*ITCatxekJnNvC7s7",
      },
      {
        id: 3,
        thumbnail:
          "https://miro.medium.com/fit/c/140/140/1*AmSI1OyNQJqTBBkAD5jUGg.png",
      },
    ],
  },
];
const BookmarkPage = () => {
  const { data } = useQuery("posts", getPosts, {}, []);
  useQuery("bookmarks", getBookmarksByUserId, {
    onSuccess: (data) => {
      console.log("dataa ", data);
    },
    onError: (err) => {
      console.log("err re", err);
    },
  });

  return (
    <PageWithTitle
      title="Bookmark"
      //   tabItems={[{ id: 1, title: "Saved" }]}
      // rightComponent={
      // 	<ModalTrigger
      // 		button={
      // 			<Button className="btn" variant="contained" color="success">
      // 				Create list
      // 			</Button>
      // 		}
      // 	>
      // 		<BookmarkListEditor />
      // 	</ModalTrigger>
      // }
    >
      <div>
        {/* <BookmarkStackList bookmarkStackList={bookmarkStackList} /> */}
        <div className="flex justify-center">
          <div className="mx-4 max-w-[700px] basis-[700px]">
            <PostList postList={data?.data} />
          </div>
        </div>
      </div>
    </PageWithTitle>
  );
};

export default BookmarkPage;
