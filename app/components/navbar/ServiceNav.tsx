'use client';

import { TbHome, TbTent, TbLuggage } from "react-icons/tb"; 
import { usePathname } from "next/navigation"; 
import Link from "next/link"; // 1. Import Link

const ServiceNav = () => {
  const pathname = usePathname();
  const isMainPage = pathname === '/';
  const isExperiencePage = pathname === '/experiences';

  return (
    <div className="hidden md:flex flex-row items-center gap-8 justify-center text-gray-500 pt-2">
      
      {/* 1. NƠI LƯU TRÚ - Dùng Link */}
      <Link href="/" className="group"> {/* Bọc ngoài bằng Link */}
        <div className={`
            flex flex-col items-center cursor-pointer gap-2
            ${isMainPage ? 'text-black' : 'text-gray-500 hover:text-black'}
        `}>
            <div className="flex flex-row items-center gap-2">
                <TbHome size={24} strokeWidth={2} /> 
                <span className="text-base font-semibold">Nơi lưu trú</span>
            </div>
            <div className={`
                w-full h-0.5 mt-1 transition-all
                ${isMainPage ? 'bg-black scale-x-100' : 'bg-transparent scale-x-0 group-hover:bg-gray-200 group-hover:scale-x-100'}
            `}></div>
        </div>
      </Link>

      {/* 2. TRẢI NGHIỆM - Dùng Link */}
      <Link href="/experiences" className="group">
        <div className={`
            flex flex-col items-center cursor-pointer gap-2 relative
            ${isExperiencePage ? 'text-black' : 'text-gray-500 hover:text-black'}
        `}>
            <div className="flex flex-row items-center gap-2 px-2">
                <div className="relative">
                    <TbTent size={24} strokeWidth={2} />
                </div>
                <span className="text-base font-medium">Trải nghiệm</span>
            </div>
            
            <div className={`
                w-full h-0.5 mt-1 transition-all
                ${isExperiencePage ? 'bg-black scale-x-100' : 'bg-transparent scale-x-0 group-hover:bg-gray-200 group-hover:scale-x-100'}
            `}></div>
        </div>
      </Link>

      {/* 3. DỊCH VỤ - Link giả (vì chưa có trang) */}
      <div className="flex flex-col items-center cursor-pointer group gap-2 hover:text-black transition">
        {/* ... giữ nguyên ... */}
        <div className="flex flex-row items-center gap-2 px-2">
             <TbLuggage size={24} strokeWidth={2} />
            <span className="text-base font-medium">Dịch vụ</span>
        </div>
        <div className="w-full h-0.5 bg-transparent mt-1 group-hover:bg-gray-200 group-hover:scale-x-100 transition-all"></div>
      </div>

    </div>
  );
}

export default ServiceNav;