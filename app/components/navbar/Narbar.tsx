'use client'

import { useEffect, useState } from 'react'
import Container from '../ui/Container'
import Logo from './Logo'
import Search from './Search'
import SearchSmall from './SearchSmall'
import UserMenu from './UserMenu'
import ServiceNav from './ServiceNav'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 60) {
        setIsScrolled(true);
        setIsExpanded(false);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showMainSearch = !isScrolled || isExpanded;

  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
        <div className={`
            transition-all duration-500 ease-in-out
            ${showMainSearch ? 'py-4' : 'py-2'}
        `}>
            <Container>
                <div className='flex flex-col gap-0'> 
                    
                    {/* --- HÀNG 1 --- */}
                    <div className='flex flex-row items-center justify-between h-20'>
                        <div className="flex-1">
                            <Logo/>
                        </div>
                        
                        {/* KHU VỰC GIỮA */}
                        <div className="flex-1 flex justify-center min-w-fit relative h-full items-center">
                             
                             {/* ServiceNav: Hiện khi MainSearch đang hiện */}
                             <div className={`
                                absolute transition-all duration-500 ease-in-out
                                ${showMainSearch ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-[-150%] pointer-events-none scale-50'}
                             `}>
                                <ServiceNav />
                             </div>

                             {/* SearchSmall: Hiện khi MainSearch ĐÃ ẨN */}
                             <div className={`
                                absolute transition-all duration-500 ease-in-out
                                ${!showMainSearch ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-[150%] pointer-events-none scale-50'}
                             `}>
                                {/* 3. Truyền sự kiện click để set isExpanded = true */}
                                <SearchSmall onClick={() => setIsExpanded(true)} />
                             </div>

                        </div>
                        
                        <div className="flex-1 flex flex-row justify-end">
                            <UserMenu/>
                        </div>
                    </div>     

                    {/* --- HÀNG 2: SEARCH TO --- */}
                    <div className={`
                        transition-all duration-500 ease-in-out origin-top
                        ${!showMainSearch 
                            ? 'max-h-0 opacity-0 scale-y-75 translate-y-5 overflow-hidden' 
                            : 'max-h-[100px] opacity-100 scale-y-100 translate-y-0 pt-4 overflow-visible'
                        } 
                    `}>
                         <div className="flex justify-center w-full">
                            {/* TRUYỀN BIẾN isExpanded VÀO ĐÂY */}
                            {/* Khi isExpanded = true (do click), Search sẽ nhận được lệnh mở lịch */}
                            <Search forceOpen={isExpanded}/> 
                         </div>
                    </div>

                </div>   
            </Container>
        </div>
        
        {/* 4. (Tùy chọn) Lớp phủ Overlay để click ra ngoài thì đóng lại */}
        {isExpanded && (
            <div 
                className="fixed inset-0 z-0 bg-transparent" 
                onClick={() => setIsExpanded(false)}
            />
        )}
    </div>
  )
}

export default Navbar