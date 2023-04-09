import { Collapse } from "@mui/material";
import { useState } from "react";
import CommentEditorFooter from "./CommentEditorFooter";
import CommentEditorHeader from "./CommentEditorHeader";
import CommentEditorInput from "./CommentEditorInput";

const CommentEditor = ({
  focus,
  isEdit,
  hideHeader,
  post,
  initialComment = {},
  onCancel = () => {},
  onSubmit,
}) => {
  const [isFocused, setIsFocused] = useState(focus);
  const [inputValue, setInputValue] = useState(
    initialComment?.content ? initialComment.content : ""
  );
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleCancel = () => {
    setIsFocused(false);
    onCancel();
  };

  const handleSubmit = () => {
    const comment = {
      id: initialComment?.id,
      content: inputValue.trim(),
      replyId: initialComment?.replyId,
      postId: post?.id,
    };
    setInputValue("");
    onSubmit(comment);
  };

  return (
    <div className="mx-7 rounded py-4 shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
      <Collapse orientation="vertical" in={isFocused && !hideHeader}>
        <CommentEditorHeader />
      </Collapse>
      <div onClick={handleFocus}>
        <CommentEditorInput
          value={inputValue}
          isFocused={isFocused}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
      <Collapse orientation="vertical" in={isFocused}>
        <CommentEditorFooter
          onCancel={handleCancel}
          onSubmit={handleSubmit}
          disabled={inputValue.trim() === ""}
          isEdit={isEdit}
        />
      </Collapse>
    </div>
  );
};

export default CommentEditor;
