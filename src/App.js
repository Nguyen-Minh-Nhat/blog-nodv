import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import SuspenseProgress from "./components/SuspenseProgress/SuspenseProgress";
import DefaultLayout from "./layouts/DefaultLayout";
import HeaderOnly from "./layouts/HeaderOnly";
import ComponentPage from "./pages/component-test";
import routes, { routesWithComponents } from "./routes/route-paths";
import SocketClient from "./web-socket/SocketClient";

const App = () => {
  const isLoggedIn = useSelector((state) => state.user.data.isLoggedIn);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <SocketClient />
      <Routes>
        {/* <Route path="/"> */}
        {routesWithComponents.map((route) => {
          let LayoutComponent = DefaultLayout;
          if (route.path === routes.home && !isLoggedIn)
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
        {/* </Route> */}
        <Route path={"/component"} element={<ComponentPage />} />
      </Routes>
    </div>
  );
};

export default App;
