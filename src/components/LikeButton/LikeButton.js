import { useState } from "react";
import { HandClappingIcon } from "../Icons";
import IconWrapper from "../IconWrapper";

const LikeButton = ({ isLiked, onClick = () => {} }) => {
  // const [isLike, setIsLike] = useState(isLiked);
  const handleClick = () => {
    onClick(!isLiked);
    // setIsLike(!isLike);
  };
  return (
    <div onClick={handleClick}>
      <IconWrapper>
        <HandClappingIcon type={isLiked ? "solid" : "light"} />
      </IconWrapper>
    </div>
  );
};

export default LikeButton;
