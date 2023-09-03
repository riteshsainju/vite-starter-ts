import { NavLink } from 'react-router-dom';

function About() {
  return (
    <>
      <h1>About page</h1>
      <NavLink to="/home">Home</NavLink>;
    </>
  );
}

export default About;
