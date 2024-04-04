import { Link, Outlet } from "react-router-dom";
import "./Admin.scss";

const Admin = () => {
  return (
    <>
      <div className="admin">
        <div className="row">
          <div className="col-md-2 p-2">
            <div className="admin-element ps-3">
              <h3 className="ps-2">Admin panel</h3>
              <ul>
                <div className="admin-item">
                  <Link to="/admin/createuser">
                    <li className="my-2"> Create User </li>
                  </Link>
                </div>

                <div className="admin-item">
                  <Link to="/admin/createuser">
                    <li> All User </li>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
          <div className="col-md-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
