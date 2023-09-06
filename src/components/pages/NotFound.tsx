import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center w-full mt-20">
      <h1 className="text-4xl font-bold text-red-600 my-5">Not Found</h1>
      <NavLink to="/app/dashboard">
        <h3 className="text-blue-500 underline">Go to Home</h3>
      </NavLink>
    </div>
  );
};

export default NotFound;
