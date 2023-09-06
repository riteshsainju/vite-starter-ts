import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import { AuthContextProvider } from './context/AuthContext';

const WrappedApp = () => {
  return (
    <AuthContextProvider>
      <Router>
        <AppRouter />
      </Router>
    </AuthContextProvider>
  );
};

export default WrappedApp;
