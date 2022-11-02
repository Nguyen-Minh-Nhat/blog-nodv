import { useSelector } from 'react-redux';
import { PostList } from '../../../features/post';

const Main = () => {
	const user = useSelector((state) => state.user.data.info);
	const postList = [
		{
			id: 1,
			title: 'Hello maays cung',
			subtitle:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente commodi nobis dolore ex. Accusamus cupiditate amet, vitae facilis quas officia nobis debitis deleniti nesciunt dignissimos quae incidunt praesentium officiis?',
			thumbnail: 'https://miro.medium.com/fit/c/140/140/0*ITCatxekJnNvC7s7',
			user,
			createdAt: new Date(2022, 9, 2),
			topics: ['react'],
			timeRead: 5,
		},
		{
			id: 2,
			title: 'Hello maays cung 2',
			subtitle:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit similique iusto nihil beatae possimus autem cum, rerum, culpa molestias nesciunt repellat, praesentium veniam ad. Cum odio totam quas velit animi.',
			thumbnail: 'https://miro.medium.com/fit/c/140/140/0*ITCatxekJnNvC7s7',
			user,
			createdAt: new Date(2022, 9, 3),
			topics: ['hello', 'react', 'react2'],
			timeRead: 1,
		},
		{
			id: 3,
			title: 'hello world',
			subtitle:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sapiente illo perferendis repudiandae maiores, doloremque qui inventore provident, assumenda, soluta possimus esse aliquid iusto. Temporibus vel nostrum iste quaerat inventore.',
			thumbnail: 'https://miro.medium.com/fit/c/140/140/0*ITCatxekJnNvC7s7',
			user,
			createdAt: new Date(2022, 9, 4),
			topics: ['hello', 'react', 'react2', 'ala1saa', 'ádfasdfasfdas ádfasdf '],
			timeRead: 1,
		},
	];
	return (
		<div className="flex justify-center">
			<div className="mx-4 max-w-[700px] basis-[700px] pt-12">
				<PostList postList={postList} />
			</div>
		</div>
	);
};

export default Main;
