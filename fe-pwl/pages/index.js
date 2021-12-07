const Homepage = () => {
  let itemTab = [
    {
      num: 1,
      name: 'Joki awodi',
      job: 'masak awkdj',
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="mt-10">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {itemTab.map((item) => (
                <tr>
                  <th>{item.num}</th>
                  <td>{item.name}</td>
                  <td>{item.job}</td>
                  <td className="flex gap-2">
                    <button className="btn btn-success btn-sm">edit</button>
                    <button className="btn btn-error btn-sm">delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
