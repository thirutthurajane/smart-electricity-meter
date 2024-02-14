import React from 'react';
import Navbar from '@/components/Navbar';

const WebLayout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <div className='flex flex-col min-h-screen'>
        {children}
      </div>
      <footer className='bg-nav mt-auto items-center content-center'>
        <div className='w-full flex flex-row mx-auto  max-w-screen-xl p-4'>
          <div>
            <p className='text-white font-semibold underline'>ติดต่อเรา</p>
            <p className='text-white'>โทร: 099-999-9999</p>
            <p className='text-white'>อีเมล: 63050188@kmitl.ac.th</p>
            <p className='text-white'>ที่อยู่ : เลขที่ 1 ซอย ฉลองกรุง 1 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร
              10520</p>
          </div>
        </div>
        <div className='w-full items-center content-center flex flex-row mx-auto'>
        <span className='text-sm w-full text-gray-700 sm:text-center dark:text-gray-400'>© 2024 <a href='#'
                                                                                            className='hover:underline'>Copy right</a>. All Rights Reserved.
            </span>
        </div>.
      </footer>
    </div>
);
};

export default WebLayout;