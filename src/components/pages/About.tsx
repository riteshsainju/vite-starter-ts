import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-red-600 my-5">About Page</h1>
      <div className="p-8">
        <NavLink to="/home">
          <h5 className="text-blue-500 underline">Go to About</h5>
        </NavLink>
      </div>
    </>
  );
};

export default About;
