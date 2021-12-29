import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const TeamList = ({ name, nim }) => {
  return (
    <div className="card shadow-2xl bg-gray-400 w-52 h-64">
      <div className="card-body">
        <div className="justify-center card-actions">
          <AccountCircleIcon className="w-20 h-20 text-blue-600" />
        </div>
        <div className="w-full flex flex-col text-black font-bold text-lg items-center pt-4 text-center">
          <span>{name}</span>
          <span>{nim}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamList;
