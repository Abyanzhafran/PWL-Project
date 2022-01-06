import { useEffect, useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const url = 'https://be-pwl.herokuapp.com/api/team';
  const [field, setField] = useState([]);
  const [name, setName] = useState('');
  const [nimm, setNim] = useState('');

  useEffect(() => {
    axios.get(url).then((res) => {
      setField(res.data);
    });
  }, []);

  const auth = () => {
    if (
      field.map((x) => x.nama == name).includes(true) &&
      field.map((x) => x.nim == nimm).includes(true)
    ) {
      alert('silahkan masuk lurr');
      window.location.href = 'http://localhost:3001/dashboardHome';
    } else {
      alert('nama atau nim tidak terdaftar lurr');
    }
  };

  return (
    <div className="card card-bordered bg-white w-1/2 lg:w-1/3">
      <div className="card-body">
        <div className="card-title mb-10">
          <h1 className="text-3xl font-bold uppercase text-center">Sign In</h1>
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
  );
};

export default SignIn;
