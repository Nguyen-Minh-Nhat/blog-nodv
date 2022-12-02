import { lazy } from "react";
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

const routes = {
  home: "/",
  post: "/post/:id",
  notifications: "/notifications",
  bookmark: "/bookmark",
  stories: "/stories",
  write: "/write",
  setting: "/setting",
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

const routesV2 = {
  home,
  post,
  notifications,
  bookmark,
  stories,
  write,
  setting,
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
];

export default routes;
