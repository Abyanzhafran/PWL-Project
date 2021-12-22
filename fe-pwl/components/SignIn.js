export default function SignIn() {
  return (
    <div className="card card-bordered bg-white w-1/2 lg:w-1/3">
      <div className="card-body">
        <div className="card-title mb-10">
          <h1 className="text-3xl font-bold uppercase text-center">Sign In</h1>
        </div>
        <div className="flex-col">
          <form action="">
            <div className="form-control">
              <label className="label">
                <label htmlFor="Username" className="label-text">
                  Username
                </label>
              </label>
              <input
                type="text"
                name="txtUsername"
                id="txtUsername"
                className="input input-ghost shadow-md"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <label htmlFor="Password" className="label-text">
                  Password
                </label>
              </label>
              <input
                type="password"
                name="txtPassword"
                id="txtPassword"
                className="input input-ghost shadow-md"
              />
            </div>
            <button className="btn btn-block btn-info mt-10" type="submit">
              Login
            </button>
            <button
              className="btn btn-block btn-outline btn-primary mt-5"
              type="reset"
            >
              Daftar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
