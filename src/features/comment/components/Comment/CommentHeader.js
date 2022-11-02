import { intlFormatDistance } from 'date-fns';
import { useMemo } from 'react';
import AccountQuickView from '../../../../components/Account/AccountQuickView';
import MenuTrigger from '../../../../components/MenuTrigger/MenuTrigger';
import CommentMenu from './CommentMenu';

const CommentHeader = ({ comment, isUser, onDelete, onEdit }) => {
	const time = useMemo(() => {
		return intlFormatDistance(new Date(comment.createdAt), new Date());
	}, [comment.createdAt]);
	return (
		<div className="flex items-center justify-between">
			<AccountQuickView
				user={comment.user}
				subName={
					<div className="flex gap-2">
						{time}
						{isUser && (
							<div className="rounded bg-slate-400 px-2 text-sm text-white">
								you
							</div>
						)}
					</div>
				}
			/>
			<MenuTrigger>
				<CommentMenu onDelete={onDelete} onEdit={onEdit} isUser={isUser} />
			</MenuTrigger>
		</div>
	);
};

export default CommentHeader;
