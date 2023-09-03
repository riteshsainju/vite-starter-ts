import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';

export default function WrappedApp() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}
