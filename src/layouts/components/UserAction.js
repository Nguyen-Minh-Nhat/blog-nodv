import {
  Avatar,
  Button,
  ListItemIcon,
  MenuItem,
  MenuList,
  Popover,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/userSlice";
import { useLocation, matchPath } from "react-router";
import { NavLink } from "react-router-dom";
import routes from "../../routes/route-paths";

const UserAction = () => {
  const { pathname } = useLocation();
  const user = useSelector((state) => state.user.data.info);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="mb-6 flex h-12 items-center justify-center">
      <Avatar
        sx={{ width: 36, height: 36 }}
        className="cursor-pointer bg-slate-600"
        src={user.avatar}
        alt={user.username}
        aria-describedby={id}
        onClick={handleClick}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="flex w-64 flex-col justify-end">
          <MenuList>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <i className="fa-solid fa-right-from-bracket text-lg"></i>
              </ListItemIcon>
              Logout
            </MenuItem>
            <MenuItem>
              <NavLink to={routes.setting} className="active">
                <ListItemIcon>
                  <i className="fa-solid fa-gear text-lg"></i>
                </ListItemIcon>
                Setting
              </NavLink>
            </MenuItem>
          </MenuList>
          <div className="border-t p-4">
            <div className="mb-4 flex flex-col">
              <span className="">{user.username}</span>
              <span className="overflow-hidden text-ellipsis text-[13px] text-slate-500">
                {user.email}
              </span>
            </div>
            <div>
              <Button
                fullWidth
                variant="outlined"
                color="inherit"
                size="small"
                className="rounded-full"
              >
                View Profile
              </Button>
            </div>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default UserAction;
