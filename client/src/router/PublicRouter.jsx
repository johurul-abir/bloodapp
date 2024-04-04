import { Navigate, Outlet } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import RegisterDonor from "../components/register/RegisterDonor";
import Home from "../pages/Home";
import { useSelector } from "react-redux";

const PublicRouteGard = () => {
  const { auths } = useSelector((state) => state.auth);

  if (!auths) {
    return <Outlet />;
  } else {
    return <Navigate to="/dashboard" />;
  }
};

const PublicRouter = [
  {
    element: <Layout />,
    children: [
      {
        element: <PublicRouteGard />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
          {
            path: "donorregister",
            element: <RegisterDonor />,
          },
        ],
      },
    ],
  },
];

//export default
export default PublicRouter;
