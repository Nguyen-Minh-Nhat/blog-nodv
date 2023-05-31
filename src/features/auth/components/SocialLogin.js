import { Button } from "@mui/material";
import React, { useMemo } from "react";
import GoogleIcon from "../../../assets/icons/google-color-icon";
import {
  FACEBOOK_LOGIN_URL,
  GITHUB_LOGIN_URL,
  GOOGLE_LOGIN_URL,
} from "../../../config/socialLink";

const SocialLogin = () => {
  const loginItems = useMemo(() => {
    return [
      {
        name: "Google",
        icon: <GoogleIcon />,
        url: GOOGLE_LOGIN_URL,
      },
      {
        name: "Facebook",
        icon: <i className="fa-brands fa-facebook-square text-blue-500"></i>,
        url: FACEBOOK_LOGIN_URL,
      },
      // {
      // 	name: 'Github',
      // 	icon: <i className="fa-brands fa-github"></i>,
      // 	url: GITHUB_LOGIN_URL,
      // },
    ];
  }, []);
  return (
    <div className="flex flex-col items-center gap-3">
      {loginItems.map((item) => (
        <Button
          href={item.url}
          key={item.name}
          variant="outlined"
          color="inherit"
          className="btn w-[212px] border-gray-300"
          startIcon={item.icon}
        >
          <span className="normal-case">Login with {item.name}</span>
        </Button>
      ))}
    </div>
  );
};

export default SocialLogin;
