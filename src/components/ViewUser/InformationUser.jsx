import MarkEmailReadSharpIcon from "@mui/icons-material/MarkEmailReadSharp";
import { Avatar } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setProfile } from "../../redux/slices/profileSlice";
import { appRoutes } from "../../routes/AppRoutes";
import UserFollowButton from "../ButtonFollow/UserFollowButton";
const InformationUser = () => {
	const user = useSelector((state) => state.user?.data.info);
	const profile = useSelector((state) => state.profile?.data);
	const profileUrl = `/profile/${profile?.email}`;

  const dispatch = useDispatch();

  const handleUpdate = (data) => {
    dispatch(setProfile(data));
  };

  return (
    <div className="mt-10 block ">
      {profile && (
        <>
          <Link to={profileUrl}>
            <Avatar src={profile.avatar} className="h-20 w-20" />
          </Link>
          <div className="mt-4 block"></div>
          <Link to={profileUrl} className="mt-2">
            <h2 className="leading-4">
              <span>{profile.username}</span>
            </h2>
          </Link>

          <div className="mt-1.5 block text-sm"></div>

          <span>{profile?.followerId?.length || 0} Followers</span>

          <div className=" mt-2  block"></div>

          <p className=" color leading-2 text-sm text-stone-700 ">
            {profile.bio}
          </p>

          <div className=" mt-4  block"></div>
					<div className="mb-10 flex ">
						{user.id !== profile?.id ? (
							<>
								<UserFollowButton
									id={profile?.id}
									userEmail={user.email}
									isFollowed={profile?.followerId?.includes(user.id)}
									textColorBefore={'text-white'}
									bgColorBefore={'bg-green-500'}
									textColorAfter={'text-green-500'}
									bgColorAfter={'rgb'}
									onUpdate={handleUpdate}
								/>
								<button className="ml-2 block">
									<MarkEmailReadSharpIcon className="color h-9 w-9 rounded-full bg-green-500 fill-white p-1.5" />
								</button>
							</>
						) : (
							<Link to={appRoutes.SETTING_ACCOUNT}>
								<span className="text-green-600">Edit profile</span>
							</Link>
						)}
					</div>
				</>
			)}
		</div>
	);
};

export default InformationUser;
