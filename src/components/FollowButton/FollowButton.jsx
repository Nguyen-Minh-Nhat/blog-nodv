import AuthClick from '../../features/auth/components/AuthClick';
import { Chip } from '@mui/material';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const FollowButton = ({
	isFollowed = false,
	textColorBefore = 'text-black',
	bgColorBefore = 'bg-white',
	textColorAfter = 'text-white',
	bgColorAfter = 'bg-black',
	onClick = () => {},
}) => {
	const [followed, setFollowed] = useState(isFollowed);
	const { isLogin } = useSelector((state) => state.user.data);
	const handleToggleFollow = () => {
		if (isLogin) {
			setFollowed(!followed);
			onClick(!followed);
		}
	};

	return (
		<>
			<AuthClick>
				<Chip
					label={followed ? 'Following' : 'Follow'}
					variant="outlined"
					className={
						followed
							? `${textColorAfter} ${bgColorAfter} px-1 py-1 text-sm `
							: `${textColorBefore} ${bgColorBefore} px-1 py-1 text-sm`
					}
					onClick={handleToggleFollow}
				/>
			</AuthClick>
		</>
	);
};
