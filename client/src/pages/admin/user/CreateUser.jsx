const CreateUser = () => {
  return (
    <>
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h2>Create User</h2>
              </div>
              <div className="card-body">
                <form action="">
                  <div className="item mb-2">
                    <label>Name</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="item my-2">
                    <label>Email</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="item my-2">
                    <label>Phone</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="item my-2">
                    <label>Password</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="item my-2">
                    <label>Location</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="item my-2">
                    <label>Blood Group</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="item my-2">
                    <label>Gender</label> <br />
                    <label htmlFor="mail" className="px-1">
                      Mail
                    </label>
                    <input type="radio" id="mail" name="gender" value="Mail" />{" "}
                    &nbsp;
                    <label htmlFor="femail" className="px-1">
                      Femail
                    </label>
                    <input
                      type="radio"
                      id="femail"
                      name="gender"
                      value="Femail"
                    />
                    <br />
                  </div>
                  <div className="item my-2">
                    <label>Photo</label>
                    <input type="file" className="form-control" />
                  </div>

                  <div className="item my-2">
                    <button className="btn btn-success">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
