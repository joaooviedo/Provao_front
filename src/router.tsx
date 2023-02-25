import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { RoutePath } from "types/routes";
import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import Users from "pages/Users";
import { Auth } from "helpers/Auth";

const AuthenticatedRoutes = () => {
  const isAuthenticated = Auth.isAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to={RoutePath.HOME} />;
};

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.REGISTER} element={<Register />} />
      <Route path="/users" element={<AuthenticatedRoutes />}>
      <Route path={RoutePath.USERS} element={<Users />} />
      </Route>
    </Routes>
  );
};

export default Router;
