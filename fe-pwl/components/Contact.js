export default function Contact() {
  return (
    <div>
      <div className=" text-center font-bold py-10">
        <p className="text-2xl py-5 uppercase">Ready to Shoot? Contact Us!</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="card card-bordered shadow-2xl w-1/2 lg:w-1/3">
          <div className="card-body">
            <div className="flex flex-col">
              <div className="form-control">
                <label className="label">
                  <label className="text-secondary-lighter">Full Name</label>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input input-ghost shadow-md"
                />
                <label className="label">
                  <label className="text-secondary-lighter">Email</label>
                </label>
                <input
                  type="text"
                  placeholder="example@domain.com"
                  className="input input-ghost shadow-md"
                />
              </div>
              <button className="btn btn-block btn-info btn-outline mt-10">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
