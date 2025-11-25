'use client';

import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
// Import thêm icon cộng trừ
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"; 

import { DateRange, RangeKeyDict, Range } from 'react-date-range'; 
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { vi } from 'date-fns/locale'; 

// --- 1. COMPONENT CON: COUNTER (Nút cộng trừ) ---
interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
  disableMinus?: boolean; // Để chặn không cho giảm xuống dưới 0 hoặc 1
}

const Counter: React.FC<CounterProps> = ({ title, subtitle, value, onChange, disableMinus }) => {
  return (
    <div className="flex flex-row items-center justify-between py-4 border-b border-gray-100 last:border-0 w-full min-w-[320px]">
       <div className="flex flex-col">
          <div className="font-semibold text-sm text-gray-900">{title}</div>
          <div className="font-light text-gray-500 text-xs">{subtitle}</div>
       </div>
       <div className="flex flex-row items-center gap-4">
          <div 
            onClick={() => {
                if (!disableMinus) onChange(value - 1);
            }}
            className={`
              w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer hover:border-black transition
              ${disableMinus ? 'opacity-20 cursor-not-allowed hover:border-gray-300' : ''}
            `}
          >
            <AiOutlineMinus size={14} className="text-gray-600" />
          </div>
          <div className="font-light text-gray-600 text-base min-w-[20px] text-center">{value}</div>
          <div 
            onClick={() => onChange(value + 1)}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer hover:border-black transition"
          >
            <AiOutlinePlus size={14} className="text-gray-600" />
          </div>
       </div>
    </div>
  )
}

// --- 2. COMPONENT CHÍNH ---
interface SearchProps {
    forceOpen?: boolean; 
}

const Search: React.FC<SearchProps> = ({ forceOpen }) => {
  const [locationValue, setLocationValue] = useState('');
  
  // State quản lý việc mở popup
  const [activeTab, setActiveTab] = useState<'date' | 'guest' | null>(null);

  // State Date
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  });

  // State Guest (Số lượng khách)
  const [guestCount, setGuestCount] = useState({
     adults: 1, // Mặc định 1 người lớn
     children: 0,
     infants: 0,
     pets: 0
  });

  const handleSelect = (ranges: RangeKeyDict) => {
    setDateRange(ranges.selection);
  };

  // Nhận tín hiệu từ Navbar (SearchSmall click)
  useEffect(() => {
    if (forceOpen) {
        const timer = setTimeout(() => {
             setActiveTab('date'); // Mặc định mở Date khi click SearchSmall
        }, 10);
        return () => clearTimeout(timer);
    }
  }, [forceOpen]); 

  // Hàm chuyển đổi tab (đảm bảo chỉ mở 1 cái 1 lúc)
  const toggleTab = (tab: 'date' | 'guest') => {
      if (activeTab === tab) {
          setActiveTab(null); // Đang mở thì đóng lại
      } else {
          setActiveTab(tab); // Mở tab mới, tự đóng tab cũ
      }
  }

  // Cập nhật số lượng khách
  const updateGuest = (type: keyof typeof guestCount, value: number) => {
      setGuestCount((prev) => ({...prev, [type]: value}));
  }
  
  // Tính tổng khách để hiển thị text
  const totalGuests = guestCount.adults + guestCount.children;

  return (
    <div className="relative w-full flex flex-col items-center px-4 md:px-0 z-50"> 
        
        {/* --- THANH SEARCH --- */}
        <div className="
          border-[1px] w-full md:w-[850px] py-2 md:py-2.5 pl-4 md:pl-6 pr-2 rounded-full shadow-md hover:shadow-lg transition cursor-pointer bg-white flex flex-row items-center justify-between
          relative z-50 
        ">
            {/* Cột 1: Địa điểm */}
            <div className="text-sm px-2 flex-1 relative">
                 <label className="hidden md:block text-xs font-bold text-gray-800 ml-1 cursor-pointer mb-0.5">Địa điểm</label>
                 <input 
                    type="text" value={locationValue} onChange={(e) => setLocationValue(e.target.value)} placeholder="Bạn muốn đi đâu?" 
                    className="w-full text-sm text-gray-600 placeholder-gray-500 outline-none bg-transparent truncate ml-1 font-medium md:font-normal h-full py-1 md:py-0"
                 />
            </div>
            <div className="hidden md:block h-8 w-[1px] bg-gray-300 mx-2"></div>

            {/* Cột 2: Thời gian */}
            <div 
                onClick={() => toggleTab('date')} 
                className={`hidden md:block flex-1 text-center cursor-pointer px-2 group hover:bg-gray-100 rounded-full py-2 transition ${activeTab === 'date' ? 'bg-gray-100' : ''}`}
            >
               <div className="text-xs font-bold text-gray-800 text-left ml-4">Thời gian</div>
               <div className="text-sm text-gray-400 text-left ml-4 truncate">Thêm ngày</div>
            </div>
             <div className="hidden md:block h-8 w-[1px] bg-gray-300 mx-2"></div>

            {/* Cột 3: Khách (Đã gắn sự kiện Click) */}
            <div 
                onClick={() => toggleTab('guest')}
                className={`hidden md:flex flex-[0.8] flex-row items-center pl-4 pr-1 gap-3 hover:bg-gray-100 rounded-full py-2 transition cursor-pointer ${activeTab === 'guest' ? 'bg-gray-100' : ''}`}
            >
              <div className="flex flex-col items-start flex-1"> 
                 <div className="text-xs font-bold text-gray-800">Khách</div>
                 <div className="text-sm text-gray-400 truncate max-w-[100px]">
                    {totalGuests > 0 ? `${totalGuests} khách` + (guestCount.infants > 0 ? `, ${guestCount.infants} em bé` : '') : 'Thêm khách'}
                 </div>
              </div>
            </div>
              
            <div className="p-2.5 md:p-3.5 bg-[#FF385C] rounded-full text-white hover:bg-[#E01561] transition flex items-center justify-center shrink-0">
              <BiSearch size={20} /> 
            </div>
        </div>

        {/* --- POPUP LỊCH (DATE) --- */}
        <div className={`
            absolute top-[110%] left-0 right-0 mx-auto w-fit bg-white shadow-2xl rounded-[32px] p-8 border border-gray-200 flex flex-col items-center
            transition-all duration-300 ease-in-out origin-top
            ${activeTab === 'date'
                ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto visible' 
                : 'opacity-0 translate-y-[-10px] scale-95 pointer-events-none invisible h-0 overflow-hidden' // Thêm h-0 để tránh chiếm chỗ
            }
            z-[100]
        `}>
            <div className="bg-gray-100 rounded-full p-1 flex mb-6 w-fit">
                <button className="bg-white shadow-sm rounded-full px-6 py-1.5 text-sm font-semibold hover:bg-white transition">Ngày</button>
                <button className="px-6 py-1.5 text-sm font-medium hover:bg-gray-200 rounded-full transition">Tháng</button>
                <button className="px-6 py-1.5 text-sm font-medium hover:bg-gray-200 rounded-full transition">Linh hoạt</button>
            </div>
            <DateRange
                rangeColors={['#262626']}
                ranges={[dateRange]}
                date={new Date()}
                onChange={handleSelect}
                months={2}
                direction="horizontal"
                locale={vi}
                showDateDisplay={false}
                minDate={new Date()}
            />
        </div>

        {/* --- POPUP KHÁCH (GUEST) - MỚI --- */}
        <div className={`
            absolute top-[110%] 
            right-0 md:right-10 /* Căn lệch phải một chút cho khớp thiết kế */
            w-fit bg-white shadow-2xl rounded-[32px] p-8 border border-gray-200 flex flex-col items-center
            transition-all duration-300 ease-in-out origin-top-right
            ${activeTab === 'guest'
                ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto visible' 
                : 'opacity-0 translate-y-[-10px] scale-95 pointer-events-none invisible h-0 overflow-hidden'
            }
            z-[100]
        `}>
            {/* 1. Người lớn */}
            <Counter 
                title="Người lớn" 
                subtitle="Từ 13 tuổi trở lên" 
                value={guestCount.adults}
                onChange={(val) => updateGuest('adults', val)}
                disableMinus={guestCount.adults <= 1} // Tối thiểu 1 người lớn
            />
            {/* 2. Trẻ em */}
            <Counter 
                title="Trẻ em" 
                subtitle="Độ tuổi 2 – 12" 
                value={guestCount.children}
                onChange={(val) => updateGuest('children', val)}
                disableMinus={guestCount.children <= 0}
            />
            {/* 3. Em bé */}
            <Counter 
                title="Em bé" 
                subtitle="Dưới 2 tuổi" 
                value={guestCount.infants}
                onChange={(val) => updateGuest('infants', val)}
                disableMinus={guestCount.infants <= 0}
            />
            {/* 4. Thú cưng */}
            <Counter 
                title="Thú cưng" 
                subtitle="Bạn sẽ mang theo động vật phục vụ?" 
                value={guestCount.pets}
                onChange={(val) => updateGuest('pets', val)}
                disableMinus={guestCount.pets <= 0}
            />
            
            <div className="text-xs text-gray-400 mt-4 text-justify max-w-[320px]">
                Chỗ ở này cho phép tối đa 4 khách, không tính em bé. Vật nuôi không được phép.
            </div>
        </div>

    </div>
  );
}

export default Search;