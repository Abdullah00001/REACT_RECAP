import LeftNav from '../features/Header/LeftNav';
import RightNav from '../features/Header/RightNav';

const Header = () => {
  return (
    <section className='bg-black h-[55px] flex items-center'>
      <div className='w-[1144px] mx-auto '>
        <div className='flex items-center w-full'>
          <LeftNav />
          <RightNav />
        </div>
      </div>
    </section>
  );
};

export default Header;
