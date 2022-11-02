import { useSelector } from 'react-redux';
import AccountQuickView from '../../../../components/Account/AccountQuickView';

const CommentEditorHeader = () => {
	const user = useSelector((state) => state.user.data.info);
	return (
		<div className="mb-4 px-4">
			<AccountQuickView user={user} />
		</div>
	);
};

export default CommentEditorHeader;
