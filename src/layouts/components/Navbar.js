import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes/route-paths";
import IconButton from "@mui/material/IconButton";
import { useLocation, matchPath } from "react-router";
import { Tooltip } from "@mui/material";

const Navbar = () => {
  const { pathname } = useLocation();

  const navbarItems = [
    {
      title: "Home",
      icon: <i className="fa-light fa-house"></i>,
      iconActive: <i className="fa-solid fa-house"></i>,
      path: routes.home,
    },
    {
      title: "Notifications",
      icon: <i className="fa-light fa-bell"></i>,
      iconActive: <i className="fa-solid fa-bell"></i>,
      path: routes.notifications,
    },
    {
      title: "Bookmark",
      icon: <i className="fa-light fa-bookmark"></i>,
      iconActive: <i className="fa-solid fa-bookmark"></i>,
      path: routes.bookmark,
    },
    {
      title: "Stories",
      icon: <i className="fa-light fa-rectangle-history"></i>,
      iconActive: <i className="fa-solid fa-rectangle-history"></i>,
      path: routes.stories,
    },
    {
      title: "write",
      icon: <i className="fa-light fa-file-pen"></i>,
      iconActive: <i className="fa-solid fa-file-pen"></i>,
      path: routes.write,
    },
  ];

  return (
    <div className="flex w-full flex-col gap-8 text-center">
      {navbarItems.map((item) => {
        const isActive = matchPath(item.path, pathname);
        return (
          <NavLink key={item.title} to={item.path} className="active">
            <Tooltip title={item.title} placement="right" arrow>
              <IconButton className={`h-10 w-10 text-xl text-black`}>
                {isActive ? item.iconActive : item.icon}
              </IconButton>
            </Tooltip>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;
