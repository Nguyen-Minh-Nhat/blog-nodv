import React from 'react';

const BookmarkStackThumbnail = ({ thumbnails = [] }) => {
	return (
		<div>
			<div className="flex">
				{[...Array(3).keys()].map((_, index) => (
					<div
						key={index}
						style={{
							zIndex: 3 - index,
							marginLeft: (-166 / 3) * 2 + 'px',
						}}
						className="h-[166px] w-[166px] overflow-hidden rounded-lg bg-slate-300 shadow-[0_0_0_1px_#fff]"
					>
						{thumbnails[index] && (
							<img
								src={thumbnails[index]}
								alt=""
								className="h-full w-full object-cover"
							/>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default BookmarkStackThumbnail;
