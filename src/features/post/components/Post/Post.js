import { Drawer } from "@mui/material";
import React, { useState } from "react";
import { CommentContainer } from "../../../comment";
import PostAction from "../PostAction";
import PostActionBar from "./PostActionBar";
import PostBody from "./PostBody";
import PostHeader from "./PostHeader";
import PostShares from "./PostShares";

const Post = ({ post, onLike, onUnlike, ...menuActionProps }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="relative h-full">
      <PostHeader post={post}>
        <PostShares />
        <PostAction post={post} {...menuActionProps} />
      </PostHeader>
      <PostBody post={post} />
      <div>
        <Drawer anchor="right" open={open} onClose={handleClose}>
          <CommentContainer onClose={handleClose} post={post} />
        </Drawer>
      </div>
      <div className="sticky bottom-4 z-10 flex w-full justify-center">
        <PostActionBar
          post={post}
          onComment={() => setOpen(true)}
          onUnlike={onUnlike}
          onLike={onLike}
        />
      </div>
    </div>
  );
};

export default Post;
