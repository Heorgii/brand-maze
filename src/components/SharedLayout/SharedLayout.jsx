import { Sidebar } from 'components/Sidebar/Sidebar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={'Loading...'}>
        <Sidebar />
        <main>
            <Outlet />
        </main>
      </Suspense>
    </>
  );
};
