import { Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}

export default AppRouter;
