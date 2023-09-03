import { NavLink } from 'react-router-dom';
import { Button } from '../atoms';

function Home() {
  const handleClick = () => {
    alert('Clicked');
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-red-600">Hello World</h1>
      <NavLink to="/about">About</NavLink>;
      <Button onClick={handleClick} type="button">
        Click Me
      </Button>
    </>
  );
}

export default Home;
