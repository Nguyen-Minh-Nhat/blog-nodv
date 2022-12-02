import React, { lazy, memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import SuspenseProgress from "../components/SuspenseProgress/SuspenseProgress";
import Layout, { layouts } from "../layouts/Layout";
import RedirectLogin from "../pages/auth/RedirectLogin";
import ProfilePage from "../pages/Profile/ProfilePage";
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
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));

export const appRoutes = {
  HOME: "/",
  POST: "/post",
  POST_DETAIL: "/post/:id",
  NOTIFICATION: "/notification",
  BOOKMARK: "/bookmark",
  STORIES: "/stories",
  WRITE: "/write",
  SETTING: "/setting",
  SETTING_ACCOUNT: "/setting",
  SETTING_NOTIFICATION: "/setting/notification",
  SETTING_PUBLISHED: "/setting/published",
  AUTH: "/oauth2",
  AUTH_REDIRECT: "/oauth2/redirect",
  AUTH_LOGIN: "/oauth2/login",
  PROFILE: "/profile",
  PROFILE_HOME: "/profile/home",
  PROFILE_LIST: "/profile/lists",
  PROFILE_ABOUT: "/profile/about",
};

export const routeConfig = [
  {
    path: appRoutes.HOME,
    element: <HomePage />,
    protected: false,
    layout: layouts.DEFAULT,
  },
  {
    path: appRoutes.POST,
    element: <PostPage />,
    protected: false,
    layout: layouts.DEFAULT,
    children: [
      {
        path: appRoutes.POST_DETAIL,
        element: <PostPage />,
      },
    ],
  },
  {
    path: appRoutes.NOTIFICATION,
    element: <NotificationsPage />,
    protected: true,
    layout: layouts.DEFAULT,
  },
  {
    path: appRoutes.BOOKMARK,
    element: <BookmarkPage />,
    protected: true,
    layout: layouts.DEFAULT,
  },
  {
    path: appRoutes.STORIES,
    element: <StoriesPage />,
    protected: true,
    layout: layouts.DEFAULT,
  },
  {
    path: appRoutes.WRITE,
    element: <WritePage />,
    protected: true,
    layout: layouts.DEFAULT,
  },
  {
    path: appRoutes.SETTING,
    element: <SettingPage />,
    protected: true,
    layout: layouts.DEFAULT,
    children: [
      {
        path: appRoutes.SETTING_ACCOUNT,
        element: <AccountTab />,
      },
      {
        path: appRoutes.SETTING_NOTIFICATION,
        element: <NotificationsTab />,
      },
      {
        path: appRoutes.SETTING_PUBLISHED,
        element: <PublishedTab />,
      },
    ],
  },
  {
    path: appRoutes.PROFILE,
    element: <ProfilePage />,
    protected: true,
    layout: layouts.DEFAULT,
  },
  {
    path: appRoutes.AUTH,
    layout: layouts.NONE,
    children: [
      { path: appRoutes.AUTH_REDIRECT, element: <RedirectLogin /> },
      { path: appRoutes.AUTH_LOGIN, element: <LoginPage /> },
    ],
  },
];

const ProtectedRoutes = () => {
  const { isLogin } = useSelector((state) => state.user.data);
  return isLogin ? <Outlet /> : <Navigate to={appRoutes.AUTH_LOGIN} replace />;
};

const AppRoutes = () => {
  const protectedRoutes = useMemo(() => {
    return {
      element: <ProtectedRoutes />,
      children: routeConfig.filter((route) => !!route?.protected),
    };
  }, []);

  const publicRoutes = useMemo(() => {
    return {
      children: routeConfig.filter((route) => !route?.protected),
    };
  }, []);

  const routeElements = useRoutes([protectedRoutes, publicRoutes]);

  return (
    <Layout>
      <SuspenseProgress>{routeElements}</SuspenseProgress>
    </Layout>
  );
};

export default memo(AppRoutes);
