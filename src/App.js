import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { getAuthInfo } from "./api/authApi";
import LoginModal from "./pages/auth/LoginModal";
import { setUser } from "./redux/slices/userSlice";
import SocketClient from "./web-socket/SocketClient";
import { setBookmark } from "./redux/slices/bookmarkSlice";
import { getBookmarkByUserId } from "./api/bookmarkApi";
import { Route, Routes, useNavigate } from "react-router-dom";
import AppRoutes, { appRoutes } from "./routes/AppRoutes";
import ComponentPage from "./pages/component-test";

const App = () => {
  const { isLogin } = useSelector((state) => state.user.data);
  const bookmark = useSelector((state) => state.bookmark);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useQuery("user", getAuthInfo, {
    enabled: isLogin,
    onSuccess: (data) => {
      if (!data?.topics || !data?.topics.length) {
        // if user has no topics, redirect to topic page
        navigate(appRoutes.TOPIC_PICK);
      }
      dispatch(setUser(data));
    },
  });

  useQuery(["bookmark", isLogin], getBookmarkByUserId, {
    enabled: isLogin,
    onSuccess: (data) => {
      // fix tam - chua hay vi useQuery van goi api
      if (!bookmark.postIds.length) {
        dispatch(setBookmark(data));
      }
    },
  });

  return (
    <div className="">
      <LoginModal />
      {/* {isLogin && <SocketClient />} */}
      <AppRoutes />
      {/* <Routes>
				<Route path="/component-test" element={<ComponentPage />} />
			</Routes> */}
    </div>
  );
};

export default App;
