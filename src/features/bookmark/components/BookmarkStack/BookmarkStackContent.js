import { Button } from '@mui/material';

const BookmarkStackContent = ({ bookmarkStack }) => {
	return (
		<div className="flex flex-col justify-between p-6">
			<h3 className="text-2xl font-bold">{bookmarkStack?.name}</h3>
			<div className="flex items-center gap-2 ">
				<Button size="small" className="btn" color="inherit" variant="outlined">
					View list
				</Button>
				<div className="text-sm font-thin text-slate-500">
					<span>{bookmarkStack?.postList.length} posts</span>
					<i className="fa-solid fa-lock ml-2"></i>
				</div>
			</div>
		</div>
	);
};

export default BookmarkStackContent;
