import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <NavLink to="/about">About</NavLink>;
    </>
  );
}

export default Home;
