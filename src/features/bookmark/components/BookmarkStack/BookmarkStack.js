import React from "react";
import BookmarkStackContent from "./BookmarkStackContent";
import BookmarkStackThumbnail from "./BookmarkStackThumbnail";

const BookmarkStack = ({ bookmarkStack }) => {
  return (
    <div className="flex w-full justify-between rounded-lg border bg-slate-50">
      <BookmarkStackContent bookmarkStack={bookmarkStack} />
      <BookmarkStackThumbnail bookmarkStack={bookmarkStack} />
    </div>
  );
};

export default BookmarkStack;
