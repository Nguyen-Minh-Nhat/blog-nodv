import { Button } from '@mui/material';
import ModalTrigger from '../../components/ModalTrigger';
import PageWithTitle from '../../components/PageWithTitle';
import { BookmarkStackList } from '../../features/bookmark';
import BookmarkListEditor from '../../features/bookmark/components/BookmarkListEditor';
const bookmarkStackList = [
	{
		id: 1,
		name: 'new 1',
		postList: [
			{
				id: 1,
				thumbnail:
					'https://miro.medium.com/fit/c/140/140/1*AmSI1OyNQJqTBBkAD5jUGg.png',
			},
			{
				id: 2,
				thumbnail: 'https://miro.medium.com/max/828/0*ITCatxekJnNvC7s7',
			},
			{
				id: 3,
				thumbnail:
					'https://miro.medium.com/fit/c/140/140/1*AmSI1OyNQJqTBBkAD5jUGg.png',
			},
		],
	},
	{
		id: 2,

		name: 'new 2',
		postList: [
			{
				id: 1,
				thumbnail:
					'https://miro.medium.com/fit/c/140/140/1*AmSI1OyNQJqTBBkAD5jUGg.png',
			},
			{
				id: 2,
				thumbnail: 'https://miro.medium.com/max/828/0*ITCatxekJnNvC7s7',
			},
			{
				id: 3,
				thumbnail:
					'https://miro.medium.com/fit/c/140/140/1*AmSI1OyNQJqTBBkAD5jUGg.png',
			},
		],
	},
	{
		id: 2,

		name: 'new 2',
		postList: [
			{
				id: 1,
				thumbnail:
					'https://miro.medium.com/fit/c/140/140/1*AmSI1OyNQJqTBBkAD5jUGg.png',
			},
			{
				id: 2,
				thumbnail: 'https://miro.medium.com/max/828/0*ITCatxekJnNvC7s7',
			},
			{
				id: 3,
				thumbnail:
					'https://miro.medium.com/fit/c/140/140/1*AmSI1OyNQJqTBBkAD5jUGg.png',
			},
		],
	},
	{
		id: 2,

		name: 'new 2',
		postList: [
			{
				id: 1,
				thumbnail:
					'https://miro.medium.com/fit/c/140/140/1*AmSI1OyNQJqTBBkAD5jUGg.png',
			},
			{
				id: 2,
				thumbnail: 'https://miro.medium.com/max/828/0*ITCatxekJnNvC7s7',
			},
			{
				id: 3,
				thumbnail:
					'https://miro.medium.com/fit/c/140/140/1*AmSI1OyNQJqTBBkAD5jUGg.png',
			},
		],
	},
	{
		id: 2,

		name: 'new 2',
		postList: [
			{
				id: 1,
				thumbnail:
					'https://miro.medium.com/fit/c/140/140/1*AmSI1OyNQJqTBBkAD5jUGg.png',
			},
			{
				id: 2,
				thumbnail: 'https://miro.medium.com/max/828/0*ITCatxekJnNvC7s7',
			},
			{
				id: 3,
				thumbnail:
					'https://miro.medium.com/fit/c/140/140/1*AmSI1OyNQJqTBBkAD5jUGg.png',
			},
		],
	},
];
const BookmarkPage = () => {
	return (
		<PageWithTitle
			title="Bookmark"
			tabItems={[{ id: 1, title: 'Saved' }]}
			rightComponent={
				<ModalTrigger
					button={
						<Button className="btn" variant="contained" color="success">
							Create list
						</Button>
					}
				>
					<BookmarkListEditor />
				</ModalTrigger>
			}
		>
			<div>
				<BookmarkStackList bookmarkStackList={bookmarkStackList} />
			</div>
		</PageWithTitle>
	);
};

export default BookmarkPage;
