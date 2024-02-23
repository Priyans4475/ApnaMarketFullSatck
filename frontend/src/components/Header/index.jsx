import React from "react";

import { Button, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center p-6 sm:px-5 w-full shadow-lg">
          <div className="header-row mt-3 mb-[9px]">
            <div className="flex flex-row gap-2 items-start justify-center">
              <Img
                className="h-6 w-[35%]"
                src="images/img_volume.svg"
                alt="volume"
              />
              <Text
                className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                size="txtPoppinsBold24"
              >
                Elliye{" "}
              </Text>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="bg-white-A700  border-gray-50 border-solid flex md:flex-1 flex-row sm:hidden items-center justify-between md:ml-[0] ml-[411px] sm:pl-5 pl-8 w-[32%] md:w-full">
          <div class="max-w-2xl mx-auto">

<form class="flex items-center">   
      <label for="simple-search" class="sr-only">Search</label>
      <div class="relative w-full">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
      </div>
      <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
  </form>


  <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
</div>
          </div>
          <Img
            className="h-6 sm:hidden md:ml-[0] ml-[304px] w-[5%]"
            src="images/img_car_1.svg"
            alt="car"
          />
          <Button
            className="cursor-pointer font-bold font-poppins sm:hidden leading-[normal] min-w-[107px] ml-8 md:ml-[0] text-center text-sm"
            shape="square"
            color="gray_800"
            size="sm"
            variant="fill"
          >
            Login
          </Button>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
