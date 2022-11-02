import IconWrapper from '../../../../components/IconWrapper';

const CommentContainerHeader = ({ onClose, numComments }) => {
	return (
		<div className="flex items-center justify-between p-6 pb-5">
			<h2 className="text-xl font-bold">
				Comments <span className="font-normal">({numComments})</span>
			</h2>
			<div>
				<IconWrapper>
					<i
						className="fa-solid fa-xmark cursor-pointer text-xl opacity-60 hover:opacity-100"
						onClick={onClose}
					></i>
				</IconWrapper>
			</div>
		</div>
	);
};

export default CommentContainerHeader;
