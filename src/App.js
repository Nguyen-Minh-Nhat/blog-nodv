import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { getAuthInfo } from "./api/authApi";
import LoginModal from "./pages/auth/LoginModal";
import { setUser } from "./redux/slices/userSlice";
import AppRoutes from "./routes/AppRoutes";
import SocketClient from "./web-socket/SocketClient";

const App = () => {
  const { isLogin } = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  useQuery("user", getAuthInfo, {
    enabled: isLogin,
    onSuccess: (data) => {
      dispatch(setUser(data));
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
