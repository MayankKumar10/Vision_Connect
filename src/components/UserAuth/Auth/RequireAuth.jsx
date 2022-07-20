import {useSelector} from "react-redux";
import {
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";

export const RequireAuth = () => {
  const {token} = useSelector((state) => state.auth);
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      state={{from: location}}
      replace
    />
  );
};
