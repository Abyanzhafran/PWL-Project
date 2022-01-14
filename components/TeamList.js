import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const TeamList = ({ name, nim, work }) => {
  return (
    <div className="card shadow-2xl bg-gray-400 w-52 h-auto">
      <div className="card-body">
        <div className="justify-center card-actions">
          <div className="w-20 h-20">
            <AccountCircleIcon className="w-full h-full text-blue-600" />
          </div>
        </div>
        <div className="w-full flex flex-col text-black text-lg items-center pt-4 text-center gap-2">
          <div className="flex flex-col">
            <span className="font-semibold">{name}</span>
            <span className="font-semibold">{nim}</span>
          </div>
          <div>
            <span className="font-bold">{work}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamList;
