import { Avatar } from "@mui/material";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { followUser, getUsersNotFollow, unFollowUser } from "../../api/userApi";
import ButtonFollow from "../ButtonFollow/ButtonFollow";

const ShowMore = () => {
  const userId = useSelector((state) => state.user?.data?.info?.id);
  // const [size, setSize] = useState(5);
  const queryClient = useQueryClient();
  const { data: getUsers } = useQuery("usersFL", () => getUsersNotFollow(20));
  const updateUsers = (updatedFollower) => {
    queryClient.setQueryData("usersFL", (oldData) =>
      oldData.map((follow) => {
        if (follow.id === updatedFollower.id) {
          return updatedFollower;
        }
        return follow;
      })
    );
  };

  const followUserMutation = useMutation(followUser, {
    onSuccess: (data) => {
      updateUsers(data);
      console.log(queryClient.getQueryData("follows"));
    },
  });

  const unFollowUserMutation = useMutation(unFollowUser, {
    onSuccess: (data) => {
      updateUsers(data);
    },
  });

  const handleFollow = (data, isFollow) => {
    if (isFollow) {
      console.log(data);
      followUserMutation.mutate(data);
    } else {
      unFollowUserMutation.mutate(data);
    }
  };

  // getUsers = useQuery("usersFL", () => getUsersNotFollow(10));
  // const handleShowMore = () => {
  //   console.log(10);
  //   setSize(10);
  // };
  return (
    <>
      <div className="h-[90vh] w-[41vw] overflow-y-scroll bg-white px-[16%] pt-20 opacity-90">
        <h2 className="m-0 block pb-5 text-center text-2xl font-bold leading-5">
          Who To Follow
        </h2>
        {getUsers &&
          getUsers.map((item1) => (
            <div
              className="relative mb-5 flex w-full items-center justify-between pt-4"
              key={item1.id}
            >
              <div className="container-left flex items-center">
                <Link to={item1.email}>
                  <Avatar
                    src={item1?.avatar}
                    className="h-12 w-12"
                    alt={item1.username}
                  />
                </Link>
                <Link to={item1.email}>
                  <div className="ml-4 mr-2 block">
                    <h2 className="break-all text-base font-bold">
                      {item1.username}
                    </h2>
                    <div className="mt-1 block  break-words">
                      <p className="A-font break-all text-sm font-normal line-clamp-2">
                        {item1?.bio}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <ButtonFollow
                  isFollowed={false}
                  textColorBefore={"text-white"}
                  bgColorBefore={"bg-green-500"}
                  textColorAfter={"text-green-500"}
                  bgColorAfter={"rgb"}
                  onClick={(state) => {}}
                />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ShowMore;
