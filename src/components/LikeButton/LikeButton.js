import { useState } from 'react';
import { HandClappingIcon } from '../Icons';
import IconWrapper from '../IconWrapper';

const LikeButton = ({ isLiked, onClick = () => {} }) => {
	const [isLikedState, setIsLikedState] = useState(isLiked);
	const handleClick = () => {
		setIsLikedState(!isLikedState);
		onClick(!isLikedState);
	};

	return (
		<div onClick={handleClick}>
			<IconWrapper>
				<HandClappingIcon type={isLikedState ? 'solid' : 'light'} />
			</IconWrapper>
		</div>
	);
};

export default LikeButton;
