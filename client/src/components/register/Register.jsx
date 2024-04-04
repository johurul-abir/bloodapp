import { Link, useNavigate } from "react-router-dom";
import registerbanner from "../../assets/img/register-baner.jpg";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hooks/useForm";
import { useEffect } from "react";
import createToast from "../../utils/toastify";
import { setMessageEmpty } from "../../features/auth/authSlice";
import { registerPatient } from "../../features/auth/authApiSlice";

const Register = () => {
  //const navigae = useNavigate();

  const dispatch = useDispatch();

  //use selector
  const { loading, error, message } = useSelector((state) => state.auth);

  //navigate
  const navigate = useNavigate();

  //get form data
  const { input, handelInputChange, resetForm } = useForm({
    name: "",
    auth: "",
    password: "",
    cpass: "",
    role: "patient",
  });

  //form submit
  const handleSubmitForm = () => {
    //check confirm password
    if (input.cpass !== input.password) {
      return createToast("password not match");
    }
    dispatch(registerPatient(input));
    resetForm();
  };

  // useEffect
  useEffect(() => {
    if (message) {
      createToast(message, "success");
      navigate("/login");
      dispatch(setMessageEmpty());
    }

    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
  }, [error, message, dispatch]);

  return (
    <>
      <div className="content top-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Register Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src={registerbanner}
                      className="img-fluid"
                      alt="Doccure Register"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Patient Register{" "}
                        <Link to="/donorregister">Are you a Donor?</Link>
                      </h3>
                    </div>
                    {/* Register Form */}
                    <form action="patient-register-step1.html">
                      <div className="mb-3 form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          name="name"
                          value={input.name}
                          onChange={handelInputChange}
                        />
                        <label className="focus-label">Name</label>
                      </div>
                      <div className="mb-3 form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          name="auth"
                          value={input.auth}
                          onChange={handelInputChange}
                        />
                        <label className="focus-label">Mobile or Email </label>
                      </div>
                      <div className="mb-3 form-focus">
                        <input
                          type="password"
                          className="form-control floating"
                          name="password"
                          value={input.password}
                          onChange={handelInputChange}
                        />
                        <label className="focus-label">Create Password</label>
                      </div>

                      <div className="mb-3 form-focus">
                        <input
                          type="password"
                          className="form-control floating"
                          name="cpass"
                          value={input.cpass}
                          onChange={handelInputChange}
                        />
                        <label className="focus-label">Confirm Password</label>
                      </div>

                      <div className="text-end">
                        <Link className="forgot-link" to="/login">
                          Already have an account?
                        </Link>
                      </div>

                      <button
                        className="btn btn-primary w-100 btn-lg login-btn"
                        type="button"
                        onClick={handleSubmitForm}
                      >
                        {loading ? "Loding" : "Signup"}
                      </button>
                      <div className="login-or">
                        <span className="or-line" />
                        <span className="span-or">or</span>
                      </div>
                      <div className="row social-login">
                        <div className="col-6">
                          <a href="#" className="btn btn-facebook w-100">
                            <i className="fab fa-facebook-f me-1" /> Login
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="#" className="btn btn-google w-100">
                            <i className="fab fa-google me-1" /> Login
                          </a>
                        </div>
                      </div>
                    </form>
                    {/* /Register Form */}
                  </div>
                </div>
              </div>
              {/* /Register Content */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
