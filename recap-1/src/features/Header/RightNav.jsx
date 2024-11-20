import React from 'react';
import { NavLink } from 'react-router-dom';

const RightNav = () => {
  const [navActive,isNavActive]=useS
  const navItemsArray = [
    { key: 1, path: '/', pathName: 'Home' },
    { key: 2, path: '/about', pathName: 'About' },
    { key: 3, path: '/auth/login', pathName: 'Login' },
    { key: 4, path: '/auth/signup', pathName: 'Signup' },
  ];
  const navStyle =
    'px-4 py-[13px] text-white hover:border-t-2 hover:border-l-2 hover:border-white';
  return (
    <div className='w-[70%]'>
      <div className='w-full'>
        <ul className='flex items-center gap-4 justify-end'>
          {navItemsArray.map((items) => (
            <li key={items.key}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `border-b-2 border-blue-500  ${navStyle}`
                    : ` ${navStyle}`
                }
                to={items.path}
              >
                {items.pathName}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightNav;
