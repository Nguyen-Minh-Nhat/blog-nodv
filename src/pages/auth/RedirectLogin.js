import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setAccessToken } from "../../redux/slices/userSlice";
import redirectImg from "../../assets/images/redirect_rocket.gif";
const RedirectLogin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) return;
    dispatch(setAccessToken(token));
    navigate("/");
  }, [dispatch, navigate, searchParams]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <img src={redirectImg} alt="redirect..." />
    </div>
  );
};

export default RedirectLogin;
