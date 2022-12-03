import React from "react";
import { BookmarkStackList } from "../../../features/bookmark";

const ListTab = () => {
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
  ];
  return (
    <div>
      <BookmarkStackList bookmarkStackList={bookmarkStackList} />
    </div>
  );
};

export default ListTab;
