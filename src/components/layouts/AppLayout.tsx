import { memo } from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className="min-h-screen flex w-full">
      <Outlet />
    </div>
  );
};

export default memo(AppLayout);
