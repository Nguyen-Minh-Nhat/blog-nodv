import { HandClappingIcon } from '../Icons';
import IconWrapper from '../IconWrapper';

const LikeButton = ({ isLiked, onClick = () => {} }) => {
	const handleClick = () => {
		onClick(!isLiked);
	};
	return (
		<div onClick={handleClick}>
			<IconWrapper>
				<HandClappingIcon type={isLiked ? 'solid' : 'light'} />
			</IconWrapper>
		</div>
	);
};

export default LikeButton;
