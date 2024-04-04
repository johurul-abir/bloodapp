import Avater from "../../components/Avater";
import { userLogOut } from "../../features/auth/authApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import createToast from "../../utils/toastify";
import { setMessageEmpty } from "../../features/auth/authSlice";
import { useLocation } from "react-router-dom";

const UserDashboard = () => {
  //use dispatch
  const dispatch = useDispatch();

  // use location
  const location = useLocation();
  console.log(location);

  //use Selector
  const { message, error, auths } = useSelector((state) => state.auth);

  //user logout
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(userLogOut());
  };

  useEffect(() => {
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
    }

    if (error) {
      createToast(error);
    }
  }, [message, error, dispatch]);

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="row">
            {/* Profile Sidebar */}
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <a href="#" className="booking-doc-img">
                      {auths.photo ? <img src={auths.photo} /> : <Avater />}
                    </a>
                    <div className="profile-det-info">
                      <h3>{auths.name}</h3>
                      <div className="patient-details">
                        {auths.dob && (
                          <h5>
                            <i className="fas fa-birthday-cake" /> {auths.dob}
                          </h5>
                        )}

                        {auths.location && (
                          <h5 className="mb-0">
                            <i className="fas fa-map-marker-alt" />{" "}
                            {auths.location}
                          </h5>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li className="active">
                        <a href="patient-dashboard.html">
                          <i className="fas fa-columns" />
                          <span>Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a href="favourites.html">
                          <i className="fas fa-bookmark" />
                          <span>Favourites</span>
                        </a>
                      </li>
                      <li>
                        <a href="dependent.html">
                          <i className="fas fa-users" />
                          <span>Dependent</span>
                        </a>
                      </li>
                      <li>
                        <a href="chat.html">
                          <i className="fas fa-comments" />
                          <span>Message</span>
                          <small className="unread-msg">23</small>
                        </a>
                      </li>
                      <li>
                        <a href="patient-accounts.html">
                          <i className="fas fa-file-invoice-dollar" />
                          <span>Accounts</span>
                        </a>
                      </li>
                      <li>
                        <a href="orders-list.html">
                          <i className="fas fa-list-alt" />
                          <span>Orders</span>
                          <small className="unread-msg">7</small>
                        </a>
                      </li>
                      <li>
                        <a href="medical-records.html">
                          <i className="fas fa-clipboard" />
                          <span>Add Medical Records</span>
                        </a>
                      </li>
                      <li>
                        <a href="medical-details.html">
                          <i className="fas fa-file-medical-alt" />
                          <span>Medical Details</span>
                        </a>
                      </li>
                      <li>
                        <a href="profile-settings.html">
                          <i className="fas fa-user-cog" />
                          <span>Profile Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href="change-password.html">
                          <i className="fas fa-lock" />
                          <span>Change Password</span>
                        </a>
                      </li>
                      <li>
                        <a onClick={handleLogOut}>
                          <i className="fas fa-sign-out-alt" />
                          <span>Logout</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* / Profile Sidebar */}
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                  <div className="card">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <img
                          src="assets/img/specialities/pt-dashboard-01.png"
                          alt="heart-image"
                          width={55}
                        />
                      </div>
                      <h5>Heart Rate</h5>
                      <h6>
                        12 <sub>bpm</sub>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                  <div className="card">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <img
                          src="assets/img/specialities/pt-dashboard-02.png"
                          alt="thermometer-image"
                          width={55}
                        />
                      </div>
                      <h5>Body Temperature</h5>
                      <h6>
                        18 <sub>C</sub>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                  <div className="card">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <img
                          src="assets/img/specialities/pt-dashboard-03.png"
                          alt="hospital-equipment"
                          width={55}
                        />
                      </div>
                      <h5>Glucose Level</h5>
                      <h6>70 - 90</h6>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                  <div className="card">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <img
                          src="assets/img/specialities/pt-dashboard-04.png"
                          alt="hospital-equipment"
                          width={55}
                        />
                      </div>
                      <h5>Blood Pressure</h5>
                      <h6>
                        202/90 <sub>mg/dl</sub>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row patient-graph-col">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Graph Status</h4>
                    </div>
                    <div className="card-body pt-2 pb-2 mt-1 mb-1">
                      <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                          <a
                            href="#"
                            className="graph-box"
                            data-bs-toggle="modal"
                            data-bs-target="#graph1"
                          >
                            <div>
                              <h4>BMI Status</h4>
                            </div>
                            <div className="graph-img">
                              <img
                                src="assets/img/shapes/graph-01.png"
                                alt="shapes-icon"
                              />
                            </div>
                            <div className="graph-status-result mt-3">
                              <span className="graph-update-date">
                                Last Update 6d
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                          <a
                            href="#"
                            className="graph-box pink-graph"
                            data-bs-toggle="modal"
                            data-bs-target="#graph2"
                          >
                            <div>
                              <h4>Heart Rate Status</h4>
                            </div>
                            <div className="graph-img">
                              <img
                                src="assets/img/shapes/graph-02.png"
                                alt="graph-icon"
                              />
                            </div>
                            <div className="graph-status-result mt-3">
                              <span className="graph-update-date">
                                Last Update 2d
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                          <a
                            href="#"
                            className="graph-box sky-blue-graph"
                            data-bs-toggle="modal"
                            data-bs-target="#graph3"
                          >
                            <div>
                              <h4>FBC Status</h4>
                            </div>
                            <div className="graph-img">
                              <img
                                src="assets/img/shapes/graph-03.png"
                                alt="chart-icon"
                              />
                            </div>
                            <div className="graph-status-result mt-3">
                              <span className="graph-update-date">
                                Last Update 5d
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                          <a
                            href="#"
                            className="graph-box orange-graph"
                            data-bs-toggle="modal"
                            data-bs-target="#graph4"
                          >
                            <div>
                              <h4>Weight Status</h4>
                            </div>
                            <div className="graph-img">
                              <img
                                src="assets/img/shapes/graph-04.png"
                                alt="chart-icon"
                              />
                            </div>
                            <div className="graph-status-result mt-3">
                              <span className="graph-update-date">
                                Last Update 3d
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body pt-0">
                  {/* Tab Menu */}
                  <nav className="user-tabs mb-4">
                    <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          href="#pat_appointments"
                          data-bs-toggle="tab"
                        >
                          Appointments
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#pat_prescriptions"
                          data-bs-toggle="tab"
                        >
                          Prescriptions
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#pat_medical_records"
                          data-bs-toggle="tab"
                        >
                          <span className="med-records">Medical Records</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#pat_billing"
                          data-bs-toggle="tab"
                        >
                          Billing
                        </a>
                      </li>
                    </ul>
                  </nav>
                  {/* /Tab Menu */}

                  {/* Tab Content */}
                  <div className="tab-content pt-0">
                    {/* Appointment Tab */}
                    <div
                      id="pat_appointments"
                      className="tab-pane fade show active"
                    >
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>Doctor</th>
                                  <th>Appt Date</th>
                                  <th>Booking Date</th>
                                  <th>Amount</th>
                                  <th>Follow Up</th>
                                  <th>Status</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-01.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Ruby Perrin <span>Dental</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>
                                    14 Nov 2023{" "}
                                    <span className="d-block text-info">
                                      10.00 AM
                                    </span>
                                  </td>
                                  <td>12 Nov 2023</td>
                                  <td>$160</td>
                                  <td>16 Nov 2023</td>
                                  <td>
                                    <span className="badge rounded-pill bg-success-light">
                                      Confirm
                                    </span>
                                  </td>
                                  <td>
                                    <div className="table-action">
                                      <a
                                        href=""
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print" /> Print
                                      </a>
                                      <a
                                        href=""
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye" /> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-10.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Olga Barlow <span>Dental</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>
                                    5 Nov 2023{" "}
                                    <span className="d-block text-info">
                                      5.00 PM
                                    </span>
                                  </td>
                                  <td>1 Nov 2023</td>
                                  <td>$100</td>
                                  <td>7 Nov 2023</td>
                                  <td>
                                    <span className="badge rounded-pill bg-success-light">
                                      Confirm
                                    </span>
                                  </td>
                                  <td>
                                    <div className="table-action">
                                      <a
                                        href=""
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print" /> Print
                                      </a>
                                      <a
                                        href=""
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye" /> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Appointment Tab */}
                    {/* Prescription Tab */}
                    <div className="tab-pane fade" id="pat_prescriptions">
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>Date </th>
                                  <th>Name</th>
                                  <th>Created by </th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>14 Nov 2023</td>
                                  <td>Prescription 1</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-01.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Ruby Perrin <span>Dental</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>
                                    <div className="table-action">
                                      <a
                                        href=""
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print" /> Print
                                      </a>
                                      <a
                                        href=""
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye" /> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>13 Nov 2023</td>
                                  <td>Prescription 2</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-02.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Darren Elder <span>Dental</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>
                                    <div className="table-action">
                                      <a
                                        href=""
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print" /> Print
                                      </a>
                                      <a
                                        href=""
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye" /> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Prescription Tab */}
                    {/* Medical Records Tab */}
                    <div id="pat_medical_records" className="tab-pane fade">
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>ID</th>
                                  <th>Date </th>
                                  <th>Description</th>
                                  <th>Attachment</th>
                                  <th>Created</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="">#MR-0010</a>
                                  </td>
                                  <td>14 Nov 2023</td>
                                  <td>Dental Filling</td>
                                  <td>
                                    <a href="#">dental-test.pdf</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-01.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Ruby Perrin <span>Dental</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>
                                    <div className="table-action">
                                      <a
                                        href=""
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye" /> View
                                      </a>
                                      <a
                                        href=""
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print" /> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="">#MR-0009</a>
                                  </td>
                                  <td>13 Nov 2023</td>
                                  <td>Teeth Cleaning</td>
                                  <td>
                                    <a href="#">dental-test.pdf</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-02.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Darren Elder <span>Dental</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>
                                    <div className="table-action">
                                      <a
                                        href=""
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye" /> View
                                      </a>
                                      <a
                                        href=""
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print" /> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Medical Records Tab */}

                    {/* Billing Tab */}
                    <div id="pat_billing" className="tab-pane fade">
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>Invoice No</th>
                                  <th>Doctor</th>
                                  <th>Amount</th>
                                  <th>Paid On</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="invoice-view.html">#INV-0008</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-03.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Deborah Angel{" "}
                                        <span>Cardiology</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>$150</td>
                                  <td>12 Nov 2023</td>
                                  <td>
                                    <div className="table-action">
                                      <a
                                        href="invoice-view.html"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye" /> View
                                      </a>
                                      <a
                                        href=""
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print" /> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="invoice-view.html">#INV-0007</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-04.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Sofia Brient <span>Urology</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>$50</td>
                                  <td>11 Nov 2023</td>
                                  <td>
                                    <div className="table-action">
                                      <a
                                        href="invoice-view.html"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye" /> View
                                      </a>
                                      <a
                                        href=""
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print" /> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="invoice-view.html">#INV-0006</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-05.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Marvin Campbell{" "}
                                        <span>Ophthalmology</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>$600</td>
                                  <td>10 Nov 2023</td>
                                  <td>
                                    <div className="table-action">
                                      <a
                                        href="invoice-view.html"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye" /> View
                                      </a>
                                      <a
                                        href=""
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print" /> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Billing Tab */}
                  </div>
                  {/* Tab Content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
