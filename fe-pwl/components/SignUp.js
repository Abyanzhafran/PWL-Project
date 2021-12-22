export default function SignUp() {
  return (
    <div className="card card-bordered bg-white w-1/2 lg:w-1/3">
      <div className="card-body">
        <div className="card-title mb-5">
          <h1 className="text-2xl font-bold uppercase">Create Account</h1>
        </div>
        <div className="flex-col">
          <form action="">
            <div className="form-control">
              <label className="label">
                <label htmlFor="Nama" className="label-text">
                  Name
                </label>
              </label>
              <input
                type="text"
                name="txtNama"
                id="txtNama"
                className="input input-ghost shadow-md"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <label htmlFor="Alamat" className="label-text">
                  Alamat
                </label>
              </label>
              <textarea
                name="txtAlamat"
                id="txtAlamat"
                cols="30"
                rows="10"
                className="textarea h-24 textarea-ghost shadow-lg"
              ></textarea>
            </div>
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
            <div className="form-control mt-5">
              <label htmlFor="" className="label">
                <label htmlFor="" className="label-text-alt">
                  Already have an account?
                  <a href="#" className="ml-1 label-text-alt text-tertriary">
                    Log in
                  </a>
                </label>
              </label>
            </div>
            <button className="btn btn-block btn-info" type="submit">
              Daftar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
