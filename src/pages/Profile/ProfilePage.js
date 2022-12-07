import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { getUserProfile } from '../../api/userApi';
import PageWithTitle from '../../components/PageWithTitle';
import { setProfile } from '../../redux/slices/profileSlice';

const ProfilePage = () => {
	const profile = useSelector((state) => state?.profile?.data);
	const ownProfile =
		useSelector((state) => state.user.data.info)?.id === profile?.id;
	const dispatch = useDispatch();
	const { email } = useParams();
	useQuery(['profile', email], () => getUserProfile(email), {
		onSuccess: (data) => {
			dispatch(setProfile(data));
		},
	});

	const tabItems = useMemo(() => {
		if (ownProfile) {
			return [
				{ id: 0, title: 'Home', path: '' },
				{ id: 1, title: 'Lists', path: 'lists' },
				{ id: 2, title: 'About', path: 'about' },
			];
		}

		return [
			{ id: 0, title: 'Home', path: '' },
			{ id: 1, title: 'About', path: 'about' },
		];
	}, [ownProfile]);

	const navigate = useNavigate();
	return (
		<>
			{profile && (
				<>
					<PageWithTitle
						title={profile.username}
						tabItems={tabItems}
						onTabChange={(tabId) => {
							navigate(tabItems[tabId].path);
						}}
					>
						<Outlet context={ownProfile} />
					</PageWithTitle>
				</>
			)}
		</>
	);
};

export default ProfilePage;
