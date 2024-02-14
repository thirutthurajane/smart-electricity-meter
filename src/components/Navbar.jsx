import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-nav border-gray-200 dark:bg-gray-900'>
      <div className='flex flex-wrap items-start justify-between mx-auto p-4'>
        <a href='https://flowbite.com/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <span className='self-center text-2xl font-semibold whitespace-nowrap text-white'>Test Web</span>
        </a>
        <button data-collapse-toggle='navbar-default' type='button'
                className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                aria-controls='navbar-default' aria-expanded='false'>
          <span className='sr-only'>Open main menu</span>
          <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none'
               viewBox='0 0 17 14'>
            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                  d='M1 1h15M1 7h15M1 13h15'/>
          </svg>
        </button>
        <div className='hidden w-full md:block md:w-auto bg-nav' id='navbar-default'>
          <ul
            className='bg-nav font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li className='bg-nav'>
              <a href='#'
                 className='block py-2 px-3 text-white bg-nav border-2 rounded-lg hover:bg-sky-700'
                 aria-current='page'>หน้าหลัก</a>
            </li>
            <li>
              <a href='#'
                 className='block py-2 px-3 text-white bg-nav border-2 rounded-lg hover:bg-sky-700'>
                แดชบอร์ด
              </a>
            </li>
            <li>
              <a href='#'
                 className='block py-2 px-3 text-white bg-nav border-2 rounded-lg hover:bg-sky-700'>
                แจ้งเตือน
              </a>
            </li>
            <li>
              <a href='#'
                 className='block py-2 px-3 text-white bg-nav border-2 rounded-lg hover:bg-sky-700'>
                โปรไฟล์
              </a>
            </li>
          </ul>
        </div>
        <div className='hidden w-full md:block md:w-auto bg-nav' id='navbar-default'>
          <ul className='bg-nav font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <a href='#'
                 className='block py-2 px-3 text-white bg-nav border-2 rounded-lg hover:bg-sky-700'>
                เข้าสู่ระบบ
              </a>
            </li>
            <li>
              <a href='#'
                 className='block py-2 px-3 text-white bg-nav border-2 rounded-lg hover:bg-sky-700'>
                เริ่มต้น
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;