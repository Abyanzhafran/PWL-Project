import { useEffect, useState } from 'react';
import axios from 'axios';
import LayoutDashboard from '../components/LayoutDashboard';
import AddIcon from '@mui/icons-material/Add';

const dashboardTeam = () => {
  const url = 'https://be-pwl.herokuapp.com/api/team';
  const [teams, setTeams] = useState([]);
  const [teamId, setTeamId] = useState('');
  const [insertTeamName, setInsertTeamName] = useState('');
  const [insertTeamNim, setInsertTeamNim] = useState('');
  const [insertTeamPekerjaan, setInsertTeamPekerjaan] = useState('');
  const [updateTeamName, setUpdateTeamName] = useState('');
  const [updateTeamNim, setUpdateTeamNim] = useState('');

  useEffect(() => {
    axios.get(url).then((res) => {
      setTeams(res.data);
    });
  }, []);

  const addTeam = () => {
    axios
      .post(url, {
        nama: insertTeamName,
        nim: insertTeamNim,
        pekerjaan: insertTeamPekerjaan,
      })
      .then(() => {
        alert('Team Added');
      });
  };

  const updateTeam = () => {
    axios
      .put(url + `/${teamId}`, {
        nama: updateTeamName,
        nim: updateTeamNim,
      })
      .then(() => {
        alert('team updated');
      });
  };

  const deleteTeam = () => {
    axios.delete(url + `/${teamId}`).then(() => {
      alert('Team Deleted');
    });
  };

  return (
    <LayoutDashboard>
      <div className="flex flex-col w-full px-4 mt-14">
        <div className="flex justify-between gap-2">
          <div className="ml-4">
            <span className="font-bold text-2xl">TEAM</span>
          </div>
          <label className="btn btn-info btn-sm" for="my-modal-1">
            <AddIcon />
            Add Team
          </label>
        </div>
        <div className="overflow-x-auto mt-10">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Id_Tim</th>
                <th>Nama</th>
                <th>Nim</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team.id}>
                  <th>{team.id}</th>
                  <td>{team.nama}</td>
                  <td>{team.nim}</td>
                  <td className="flex gap-1">
                    <label
                      className="btn btn-xs btn-success modal-button"
                      for="my-modal-2"
                      onClick={() => setTeamId(team.id)}
                    >
                      Edit
                    </label>
                    <label
                      className="btn btn-xs btn-error"
                      for="my-modal-3"
                      onClick={() => setTeamId(team.id)}
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* add modal */}
      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="flex flex-col gap-4 mt-8">
            <span className="font-bold text-2xl">Input Data Tim</span>
            <input
              placeholder="Nama"
              className="input input-bordered"
              type="text"
              onChange={(e) => setInsertTeamName(e.target.value)}
            />
            <input
              placeholder="Nim"
              className="input input-bordered"
              type="text"
              onChange={(e) => setInsertTeamNim(e.target.value)}
            />
            <input
              placeholder="Pekerjaan"
              className="input input-bordered"
              type="text"
              onChange={(e) => setInsertTeamPekerjaan(e.target.value)}
            />
          </div>
          <div className="modal-action">
            <label
              for="my-modal-1"
              className="btn btn-primary"
              onClick={() => addTeam()}
            >
              Submit
            </label>
            <label for="my-modal-1" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
      {/* update modal */}
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          {teams
            .filter((x) => x.id == teamId)
            .map((team) => (
              <div className="flex flex-col gap-4 mt-8">
                <span className="font-bold text-2xl">Edit Data Tim</span>
                <input
                  placeholder={team.nama}
                  className="input input-bordered"
                  type="text"
                  onChange={(e) => setUpdateTeamName(e.target.value)}
                />
                <input
                  placeholder={team.nim}
                  className="input input-bordered"
                  type="text"
                  onChange={(e) => setUpdateTeamNim(e.target.value)}
                />
              </div>
            ))}
          <div className="modal-action">
            <label
              for="my-modal-2"
              className="btn btn-primary"
              onClick={() => updateTeam()}
            >
              Update
            </label>
            <label for="my-modal-2" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
      {/* delete modal */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <span>Sure want to Delete ??</span>
          <div className="modal-action">
            <label
              for="my-modal-3"
              className="btn btn-primary"
              onClick={() => deleteTeam()}
            >
              Delete
            </label>
            <label for="my-modal-3" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </LayoutDashboard>
  );
};

export default dashboardTeam;
