import { Avatar } from '@mui/material';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createNotification } from '../../api/notificationApi';
import { followUser, getAllUnFollow, unFollowUser, updateCountNotifications } from '../../api/userApi';
import { NotificationType } from '../../config/dataType';
import { callApiCreateNotification } from '../../utils/generationNotification';
import ButtonFollow from '../ButtonFollow/ButtonFollow';
import ShowMore from "./ShowMore";
import ModalTrigger from "../ModalTrigger";

const WhoToFollow = () => {
  const userId = useSelector((state) => state.user?.data?.info?.id);
  const queryClient = useQueryClient();
  const { data: users } = useQuery("follows", () => getUsersNotFollow(3));
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

	const createNotificationMutation = useMutation(createNotification);

	const followUserMutation = useMutation(followUser, {
		onSuccess: (data) => {
			updateUsers(data);
			console.log(queryClient.getQueryData('follows'));
		},
	});

	const unFollowUserMutation = useMutation(unFollowUser, {
		onSuccess: (data) => {
			updateUsers(data);
		},
	});
	const updateUserIncreaseNumOfNotification = useMutation(
		updateCountNotifications
	  );
	
	const handleFollow = (data, isFollow) => {
		if (isFollow) {
			followUserMutation.mutate(data);
			callApiCreateNotification(data,
				NotificationType.FOLLOW,
				createNotificationMutation,
				userId
			  );
			  const Increase = {
				isIncrease: true,
				userId: data,
			  };
			  updateUserIncreaseNumOfNotification.mutate(Increase);
			  
		} else {
			unFollowUserMutation.mutate(data);
		}
	};
	return (
		<>
			<div className="mt-10">
				<h2 className="m-0 block text-base font-medium leading-5">
					Who To Follow
				</h2>

				{users &&
					users.map((item) => (
						<div
							className="relative flex w-full items-center justify-between pt-4"
							key={item.id}
						>
							<div className="flex items-center">
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
											<p className=" color break-all text-sm font-normal line-clamp-2">
												{item?.bio}
											</p>
										</div>
									</div>
								</Link>
							</div>
							<div>
								<ButtonFollow
									isFollowed={item?.followerId?.includes(userId)}
									onClick={(state) => {
										handleFollow(item.id, state);
									}}
								/>
							</div>
						</div>
					))}
			</div>
			 <ModalTrigger
          button={
            <span className="absolute mt-5 cursor-pointer">Show more</span>
          }
        >
          {<ShowMore />}
        </ModalTrigger>
		</>
	);
};

export default WhoToFollow;
