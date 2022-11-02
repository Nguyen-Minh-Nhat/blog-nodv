import React from 'react';
import BookmarkStackContent from './BookmarkStackContent';
import BookmarkStackThumbnail from './BookmarkStackThumbnail';

const BookmarkStack = () => {
	return (
		<div className="flex w-full justify-between rounded-lg border bg-slate-50">
			<BookmarkStackContent />
			<BookmarkStackThumbnail />
		</div>
	);
};

export default BookmarkStack;
