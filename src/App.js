import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { getAuthInfo } from "./api/authApi";
import LoginModal from "./pages/auth/LoginModal";
import { setUser } from "./redux/slices/userSlice";
import SocketClient from "./web-socket/SocketClient";
import { setBookmark } from "./redux/slices/bookmarkSlice";
import { getBookmarkByUserId } from "./api/bookmarkApi";
import { useNavigate } from "react-router-dom";
import AppRoutes, { appRoutes } from "./routes/AppRoutes";

const App = () => {
  const { isLogin } = useSelector((state) => state.user.data);
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

  useQuery("bookmark", getBookmarkByUserId, {
    enabled: isLogin,
    onSuccess: (data) => {
      dispatch(setBookmark(data));
    },
  });

  return (
    <div className="">
      <LoginModal />
      {isLogin && <SocketClient />}
      <AppRoutes />
    </div>
  );
};

export default App;
