import { useDispatch, useSelector } from 'react-redux';

import { PostList } from '../../../features/post';
import { PostListLoading } from '../../../features/post/components';
import React from 'react';
import { getBookmarkByUserId } from '../../../api/bookmarkApi';
import { setBookmark } from '../../../redux/slices/bookmarkSlice';
import { useQuery } from 'react-query';

const ListTab = () => {
	const dispatch = useDispatch();
	const bookmark = useSelector((state) => state.bookmark);

	const { isLoading } = useQuery('bookmark', getBookmarkByUserId, {
		onSuccess: (data) => {
			dispatch(setBookmark(data));
		},
	});
	return (
		<div>
			<div className="flex justify-center">
				<div className="mx-4 max-w-[700px] basis-[700px]">
					<PostList
						postList={bookmark?.posts}
						postIdsBookmark={bookmark?.postIds}
					/>
					{isLoading && <PostListLoading />}
				</div>
			</div>
		</div>
	);
};

export default ListTab;
