'use client';

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="
      ml-10
      w-full md:w-[600px] 
      py-1.5 
      px-8
      rounded-full 
      shadow-lg 
      hover:shadow-xl 
      transition 
      cursor-pointer 
      bg-white
      border
    ">
      <div className="flex flex-row items-center gap-4">

        {/* Địa điểm */}
        <div className="flex-1 flex flex-col items-center">
          <span className="text-base font-semibold">Địa điểm</span>
          <span className="text-gray-500 text-sm font-normal">Tìm kiếm điểm đến</span>
        </div>

        {/* Thời gian */}
        <div className="hidden sm:flex flex-1 flex-col items-center border-x px-4">
          <span className="text-base font-semibold">Thời gian</span>
          <span className="text-gray-500 text-sm font-normal">Thêm ngày</span>
        </div>

        {/* Khách */}
        <div className="flex-1 flex flex-col items-center sm:items-start px-4">
          <span className="font-semibold">Khách</span>
          <span className="text-gray-500 text-sm">Thêm khách</span>
        </div>

        {/* Icon Search */}
        <div className="ml-auto p-3 bg-rose-500 rounded-full text-white shadow-md">
          <BiSearch size={20} />
        </div>

      </div>
    </div>
  );
}

export default Search;
