import { Chip } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import AuthClick from "../../features/auth/components/AuthClick";

const ButtonFollow = ({
  isFollowed = false,
  textColorBefore = "text-black",
  bgColorBefore = "bg-white",
  textColorAfter = "text-white",
  bgColorAfter = "bg-black",
  onClick = () => {},
}) => {
  const [followed, setFollowed] = useState(isFollowed);
  const { isLogin } = useSelector((state) => state.user.data);
  const handleToggleFollow = () => {
    if (isLogin) {
      setFollowed(!followed);
      onClick(!followed);
      console.log(2);
    }
  };

  return (
    <>
      <AuthClick>
        <Chip
          label={followed ? "Following" : "Follow"}
          variant="outlined"
          className={
            followed
              ? `${textColorAfter} ${bgColorAfter} px-1 py-1 text-sm `
              : `${textColorBefore} ${bgColorBefore} px-1 py-1 text-sm`
          }
          onClick={handleToggleFollow}
        />
      </AuthClick>
    </>
  );
};

export default ButtonFollow;
