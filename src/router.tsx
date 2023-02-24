import { Routes, Route } from "react-router-dom";
import { RoutePath } from "types/routes";
import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import Users from "pages/Users";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.REGISTER} element={<Register />} />
      <Route path={RoutePath.USERS} element={<Users />} />
      <Route path={RoutePath.HOME} element={<Home />} />
    </Routes>
  );
};

export default Router;
