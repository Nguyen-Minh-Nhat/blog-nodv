import { Avatar } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getListPostHided } from "../../api/postApi";
import { followUser, getUsersNotFollow, unFollowUser } from "../../api/userApi";
import ButtonFollow from "../ButtonFollow/ButtonFollow";
import ModalTrigger from "../ModalTrigger";
import ShowMore from "./ShowMore";

const WhoToFollow = () => {
  const userId = useSelector((state) => state.user?.data?.info?.id);
  const queryClient = useQueryClient();
  const { data: users } = useQuery("follows", () => getUsersNotFollow(3));
  console.log(users);

  const { data: test } = useQuery("test1", () => getListPostHided());

  console.log(test);
  const updateUsers = (updatedFollower) => {
    queryClient.setQueryData("follows", (oldData) =>
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
  return (
    <>
      <div>
        <h2 className="m-0 block text-base font-medium leading-5">
          Who To Follow
        </h2>
        {users &&
          users.map((item) => (
            <div
              className="relative mb-5 flex w-full items-center justify-between pt-4"
              key={item.id}
            >
              <div className="container-left flex items-center">
                <Link to={item.email}>
                  <Avatar
                    src={item?.avatar}
                    className="h-12 w-12"
                    alt={item.username}
                  />
                </Link>
                <Link to={item.email}>
                  <div className="ml-4 mr-2 block">
                    <h2 className="break-all text-base font-bold">
                      {item.username}
                    </h2>
                    <div className="mt-1 block  break-words">
                      <p className="A-font break-all text-sm font-normal line-clamp-2">
                        {item?.bio}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <ButtonFollow
                  isFollowed={item?.followerId?.includes(userId)}
                  textColorBefore={"text-black"}
                  bgColorBefore={"border-rgb"}
                  textColorAfter={"text-white"}
                  bgColorAfter={"bg-black"}
                  onClick={(state) => {
                    handleFollow(item.id, state);
                  }}
                />
              </div>
            </div>
          ))}

        <ModalTrigger
          button={
            <span className="absolute mt-5 cursor-pointer">Show more</span>
          }
        >
          {<ShowMore />}
        </ModalTrigger>
      </div>
    </>
  );
};

export default WhoToFollow;
