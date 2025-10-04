import { Outlet } from 'react-router-dom';
import Header from './Header';

const AppMainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AppMainLayout;
