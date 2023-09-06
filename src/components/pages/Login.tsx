import { useAuthContext } from 'src/context/AuthContext';
import { Button } from '../atoms';

const Login = () => {
  const stateContext = useAuthContext();
  const { dispatch } = stateContext || {};

  const handleAuthorization = () => {
    const userData = { user: { name: 'John Doe', email: 'test@example.com' } };
    localStorage.setItem('_users', JSON.stringify(userData));
    dispatch({
      type: 'SET_USER',
      payload: userData,
    });
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-red-600 my-5">Login Page</h1>
      <div className="p-8 m-10">
        <Button onClick={handleAuthorization} type="default" className="my-5">
          Authorize
        </Button>
      </div>
    </>
  );
};

export default Login;
