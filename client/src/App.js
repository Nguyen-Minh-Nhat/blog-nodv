import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import BookmarkPage from './pages/bookmark/BookmarkPage';
import HomePage from './pages/home/HomePage';
import NotificationsPage from './pages/notifications/NotificationsPage';
import StoriesPage from './pages/stories/StoriesPage';
import WritePage from './pages/write/WritePage';
import routes from './routes/route-paths';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path={routes.home} element={<HomePage />} />
				<Route path={routes.bookmark} element={<BookmarkPage />} />
				<Route path={routes.notifications} element={<NotificationsPage />} />
				<Route path={routes.stories} element={<StoriesPage />} />
				<Route path={routes.write} element={<WritePage />} />
			</Route>
		</Routes>
	);
};

export default App;
