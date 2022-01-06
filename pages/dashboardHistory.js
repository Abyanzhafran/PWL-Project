import LayoutDashboard from '../components/LayoutDashboard';

const dashboardHistory = () => {
  return (
    <LayoutDashboard>
      <div className="flex flex-col w-full px-4 mt-14">
        <div className="mb-4">
          <span className="font-bold text-2xl">EDIT HISTORY</span>
        </div>
        <div className="form-control">
          <textarea
            className="textarea h-72 mb-10 textarea-bordered textarea-info"
            placeholder="Something in airgun history"
          ></textarea>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-info">Submit</button>
          <button className="btn btn-error">Cancel</button>
        </div>
      </div>
    </LayoutDashboard>
  );
};

export default dashboardHistory;
