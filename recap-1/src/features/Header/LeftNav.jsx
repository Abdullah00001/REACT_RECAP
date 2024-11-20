import { Link } from 'react-router-dom';

const LeftNav = () => {
  return (
    <div className='w-[30%]'>
      <Link className='text-2xl font-bold text-white' to={'/'}>
        TaskIo
      </Link>
    </div>
  );
};

export default LeftNav;
