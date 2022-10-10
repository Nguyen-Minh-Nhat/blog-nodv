import BookmarkPage from '../pages/bookmark/BookmarkPage';
import HomePage from '../pages/home/HomePage';
import NotificationsPage from '../pages/notifications/NotificationsPage';
import StoriesPage from '../pages/stories/StoriesPage';
import WritePage from '../pages/write/WritePage';

const routes = {
	home: '',
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
];

export default routes;
