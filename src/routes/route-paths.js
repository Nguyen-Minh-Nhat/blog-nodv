import BookmarkPage from '../pages/bookmark/BookmarkPage';
import HomePage from '../pages/home/HomePage';
import NotificationsPage from '../pages/notifications/NotificationsPage';
import PostPage from '../pages/post/PostPage';
import StoriesPage from '../pages/stories/StoriesPage';
import WritePage from '../pages/write/WritePage';

const routes = {
	home: '/',
	post: '/post/:id',
	notifications: '/notifications',
	bookmark: '/bookmark',
	stories: '/stories',
	write: '/write',
};

export const routesWithComponents = [
	{
		path: routes.home,
		component: HomePage,
	},
	{
		path: routes.notifications,
		component: NotificationsPage,
	},
	{
		path: routes.bookmark,
		component: BookmarkPage,
	},
	{
		path: routes.stories,
		component: StoriesPage,
	},
	{
		path: routes.write,
		component: WritePage,
	},
	{
		path: routes.post,
		component: PostPage,
	},
];

export default routes;
