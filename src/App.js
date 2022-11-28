import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useParams } from "react-router-dom";
import { getAuthInfo } from "./api/authApi";
import SocketTest from "./components/SocketTest";
import SuspenseProgress from "./components/SuspenseProgress/SuspenseProgress";
import DefaultLayout from "./layouts/DefaultLayout";
import HeaderOnly from "./layouts/HeaderOnly";
import RedirectLogin from "./pages/auth/RedirectLogin";
import ComponentPage from "./pages/component-test";
import { setUser } from "./redux/slices/userSlice";
import routes, { routesWithComponents } from "./routes/route-paths";
import SocketClient from "./web-socket/SocketClient";

const App = () => {
  const isLogin = useSelector((state) => !!state.user.data.accessToken);
  const dispatch = useDispatch();
  useQuery("user", getAuthInfo, {
    enabled: isLogin,
    onSuccess: (data) => {
      dispatch(setUser(data.data));
    },
  });
  return (
    <div className="h-screen w-screen overflow-hidden">
      {/* <SocketClient /> */}
      <Routes>
        {routesWithComponents.map((route) => {
          let LayoutComponent = DefaultLayout;
          if (route.path === routes.home && !isLogin)
            LayoutComponent = HeaderOnly;
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <LayoutComponent>
                  <SuspenseProgress>{<route.component />}</SuspenseProgress>
                </LayoutComponent>
              }
            >
              {route?.children &&
                route.children.map((child) => {
                  const Component = child.component;
                  return (
                    <Route
                      key={child.path}
                      path={child.path}
                      element={<Component />}
                    />
                  );
                })}
            </Route>
          );
        })}

        <Route path={"/component"} element={<ComponentPage />} />
        <Route path={"/oauth2/redirect"} element={<RedirectLogin />} />
        <Route path={"/profile/:email"} element={<RedirectLogin />} />
      </Routes>
    </div>
  );
};

export default App;
