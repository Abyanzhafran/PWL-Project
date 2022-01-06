export default function Contact() {
  return (
    <div>
      <div className=" text-center font-bold py-10">
        <p className="text-2xl py-5 uppercase">Ready to Roll? Contact Us!</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="card card-bordered bg-primary text-secondary-lighter w-1/2 lg:w-1/3">
          <div className="card-body">
            <div className="card-title mb-10">
              <h1 className="text-3xl font-bold uppercase text-center">
                Sign In
              </h1>
            </div>
            <div className="flex flex-col">
              <div className="form-control">
                <label className="label">
                  <label className="label-text">Username</label>
                </label>
                <input
                  type="text"
                  className="input input-ghost shadow-md"
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="label">
                  <label htmlFor="Password" className="label-text">
                    Nim
                  </label>
                </label>
                <input
                  type="password"
                  className="input input-ghost shadow-md"
                  onChange={(e) => setNim(e.target.value)}
                />
              </div>
              <button
                className="btn btn-block btn-info mt-10"
                onClick={() => auth()}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
