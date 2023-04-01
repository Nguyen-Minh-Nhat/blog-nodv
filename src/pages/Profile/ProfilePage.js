import { Outlet, useNavigate, useParams } from 'react-router-dom';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MainContentLayout } from '../../layouts';
import Tab from '../../components/Tab';
import { getUserProfile } from '../../api/userApi';
import { setProfile } from '../../redux/slices/profileSlice';
import { useQuery } from 'react-query';

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
				<MainContentLayout>
					<MainContentLayout.Header>
						<MainContentLayout.Title>
							{profile.username}
						</MainContentLayout.Title>
						<Tab
							tabItems={tabItems}
							onChange={(tabId) => {
								navigate(tabItems[tabId].path);
							}}
						/>
					</MainContentLayout.Header>
					<MainContentLayout.Body>
						<Outlet context={ownProfile} />
					</MainContentLayout.Body>
				</MainContentLayout>
			)}
		</>
	);
};

export default ProfilePage;
