import { NavLink } from 'react-router-dom';
import { Button } from '../atoms';

function Home() {
  const handleClick = () => {
    alert('Clicked');
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-red-600 my-5">Hello World</h1>
      <div className="p-8">
        <NavLink to="/about">
          <h5 className="text-blue-500 underline">Go to Home</h5>
        </NavLink>
        <Button onClick={handleClick} type="default" className="my-5">
          Click Me
        </Button>
      </div>
    </>
  );
}

export default Home;
