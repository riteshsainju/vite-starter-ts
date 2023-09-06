import { useAuthContext } from 'src/context/AuthContext';
import { Button } from '../atoms';

const Home = () => {
  const stateContext = useAuthContext();
  const { dispatch } = stateContext || {};

  const handleLogout = () => {
    localStorage.removeItem('_users');
    dispatch({
      type: 'SET_USER',
      payload: null,
    });
  };

  return (
    <div className="text-center w-full mt-20">
      <h1 className="text-4xl font-bold text-blue-500 my-5">
        Welcome to Dashboard
      </h1>
      <div className="p-8 m-2">
        <Button onClick={handleLogout} type="default" className="my-5">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Home;
