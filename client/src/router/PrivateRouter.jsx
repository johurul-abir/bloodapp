import { useSelector } from "react-redux";
import Admin from "../pages/admin/Admin";
import CreateUser from "../pages/admin/user/CreateUser";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../components/layout/Layout";
import UserDashboard from "../pages/user/UserDashboard";

const PrivateRouteGard = () => {
  const { auths } = useSelector((state) => state.auth);

  if (auths) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

const PrivateRouter = [
  //user admin
  {
    element: <PrivateRouteGard />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "dashboard",
            element: <UserDashboard />,
          },
        ],
      },
    ],
  },
  //main admin
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "createuser",
        element: <CreateUser />,
      },
    ],
  },
];
//export default
export default PrivateRouter;
