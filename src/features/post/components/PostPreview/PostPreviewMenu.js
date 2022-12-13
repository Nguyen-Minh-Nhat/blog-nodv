import { ListItemIcon, MenuItem, MenuList } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  DeleteIcon,
  EditIcon,
  EyeIcon,
  EyeSlashIcon,
  FlagIcon,
} from "../../../../components/Icons";
import { appRoutes } from "../../../../routes/AppRoutes";

const PostMenu = ({
  post,
  onDelete,
  onPublish,
  onUnpublish,
  onEdit,
  onHidePost,
}) => {
  const userId = useSelector((state) => state.user?.data?.info?.id);
  const navigate = useNavigate();
  const isUser = post.user.id === userId;
  const menuItems = useMemo(() => {
    let items = [];
    if (isUser) {
      items = [
        ...items,
        {
          icon: <EditIcon />,
          label: "Edit",
          onClick: () => navigate(`${appRoutes.WRITE}/${post.id}`),
        },
        {
          icon: <DeleteIcon />,
          label: "Delete",
          onClick: () => onDelete(post.id),
        },
        post.isPublish
          ? {
              icon: <EyeSlashIcon />,
              label: "Unpublish",
              onClick: () => onUnpublish(post.id),
            }
          : {
              icon: <EyeIcon />,
              label: "Publish",
              onClick: () => onPublish(post.id),
            },
      ];
    } else {
      items = [
        ...items,
        {
          icon: <EyeIcon />,
          label: "Hide this post",
          onClick: () => onHidePost(post.id),
        },
        {
          icon: <FlagIcon />,
          label: "Report this post",
        },
      ];
    }

    return items;
  }, [
    isUser,
    navigate,
    onDelete,
    onPublish,
    onUnpublish,
    post.id,
    post.isPublish,
    onHidePost,
  ]);
  return (
    <div className="flex min-w-[180px] flex-col justify-end bg-white">
      <MenuList>
        {menuItems.map((item) => (
          <MenuItem key={item.label} onClick={item.onClick}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </div>
  );
};

export default PostMenu;
