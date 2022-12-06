import { lazy } from "react";
import AboutTab from "../pages/Profile/tab/AboutTab";
import HomeTab from "../pages/Profile/tab/HomeTab";
import ListsTab from "../pages/Profile/tab/ListsTab";
import AccountTab from "../pages/setting/tab/AccountTab";
import NotificationsTab from "../pages/setting/tab/NotificationsTab";
import PublishedTab from "../pages/setting/tab/PublishedTab";
const BookmarkPage = lazy(() => import("../pages/bookmark"));
const HomePage = lazy(() => import("../pages/home/HomePage"));
const NotificationsPage = lazy(() => import("../pages/notifications"));
const StoriesPage = lazy(() => import("../pages/stories/StoriesPage"));
const PostPage = lazy(() => import("../pages/post/PostPage"));
const WritePage = lazy(() => import("../pages/write/WritePage"));
const SettingPage = lazy(() => import("../pages/setting/SettingPage"));
const ProfilePage = lazy(() => import("../pages/profile/ProfilePage"));

const routes = {
  home: "/",
  post: "/post/:id",
  notifications: "/notifications",
  bookmark: "/bookmark",
  stories: "/stories",
  write: "/write",
  setting: "/setting",
  profile: "/profile",
};

const home = {
  path: "/",
  element: <HomePage />,
};

const post = {
  path: "/post",
  children: [{ path: "/:id", element: <PostPage /> }],
};

const notifications = {
  path: "/notifications",
  element: <NotificationsPage />,
};

const bookmark = {
  path: "/bookmark",
  element: <BookmarkPage />,
};

const stories = {
  path: "/stories",
  element: <StoriesPage />,
};

const write = {
  path: "/write",
  element: <WritePage />,
};

const setting = {
  path: "/setting",
  element: <WritePage />,
  children: [
    { path: "/account", element: <AccountTab /> },
    { path: "/notification", element: <NotificationsTab /> },
    { path: "/published", element: <PublishedTab /> },
  ],
};
const profile = {
  path: "/profile",
  element: <ProfilePage />,
  children: [
    { path: "/home", element: <HomeTab /> },
    { path: "/lists", element: <ListsTab /> },
    { path: "/about", element: <AboutTab /> },
  ],
};

const routesV2 = {
  home,
  post,
  notifications,
  bookmark,
  stories,
  write,
  setting,
  profile,
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
  {
    path: routes.setting,
    component: SettingPage,
    children: [
      { path: "", component: AccountTab },
      { path: "published", component: PublishedTab },
      { path: "notification", component: NotificationsTab },
    ],
  },
  {
    path: routes.profile,
    component: ProfilePage,
    children: [
      { path: "", component: HomeTab },
      { path: "lists", component: ListsTab },
      { path: "about", component: AboutTab },
    ],
  },
];

export default routes;
