'use client';

import { BiSearch } from "react-icons/bi";

interface SearchSmallProps {
  onClick: () => void; // 1. Thêm định nghĩa prop onClick
}

const SearchSmall: React.FC<SearchSmallProps> = ({ onClick }) => {
  return (
    <div 
        onClick={onClick} // 2. Gắn sự kiện click vào div cha
        className="
        border-[1px] 
        w-full 
        md:w-auto 
        py-2 
        rounded-full 
        shadow-sm 
        hover:shadow-md 
        transition 
        cursor-pointer
        bg-white
    ">
        <div className="flex flex-row items-center justify-between">
            {/* ... (Giữ nguyên nội dung bên trong) ... */}
            
            {/* 1. PHẦN ĐỊA ĐIỂM */}
            <div className="text-sm font-semibold px-6 flex-1 md:flex-none">
                <span className="hidden md:block">Địa điểm bất kỳ</span>
                <span className="md:hidden">Tìm kiếm...</span>
            </div>

            {/* 2. PHẦN THỜI GIAN */}
            <div className="hidden md:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
                Tuần bất kỳ
            </div>

            {/* 3. PHẦN KHÁCH */}
            <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                <div className="hidden md:block">Thêm khách</div>
                <div className="p-2 bg-[#FF385C] rounded-full text-white">
                    <BiSearch size={16} />
                </div>
            </div>

        </div>
    </div>
  );
}

export default SearchSmall;