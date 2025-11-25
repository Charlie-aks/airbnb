'use client';

import { Range } from "react-date-range";
import Button from "../../ui/Button";
import { format } from "date-fns"; 

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onSubmit,
  disabled,
}) => {
  
  // Tính toán ngày hiển thị
  const start = dateRange.startDate ? format(dateRange.startDate, 'dd/MM/yyyy') : 'Nhận phòng';
  const end = dateRange.endDate ? format(dateRange.endDate, 'dd/MM/yyyy') : 'Trả phòng';

  // Giả lập các loại phí (để giống Airbnb thật)
  const cleaningFee = 20; 
  const serviceFee = 15;
  const totalDisplay = totalPrice + cleaningFee + serviceFee;

  return ( 
    <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-xl sticky top-28">
      <div className="flex flex-row items-baseline gap-1 p-6 pb-0">
        <div className="text-2xl font-semibold">
          ${price}
        </div>
        <div className="font-light text-neutral-600">
          / đêm
        </div>
      </div>
      
      <div className="p-4">
         {/* Khung chọn ngày & khách: Bo tròn và border phức tạp */}
         <div className="border border-neutral-400 rounded-lg overflow-hidden">
             <div className="flex flex-row border-b border-neutral-400">
                 {/* Nút Nhận phòng - Click để mở lịch (Logic xử lý ở cha) */}
                 <div className="flex-1 p-3 border-r border-neutral-400 cursor-pointer hover:bg-neutral-100 transition relative">
                     <div className="text-[10px] font-bold uppercase text-neutral-800">Nhận phòng</div>
                     <div className="text-sm font-light text-neutral-600 truncate">{start}</div>
                 </div>
                 {/* Nút Trả phòng */}
                 <div className="flex-1 p-3 cursor-pointer hover:bg-neutral-100 transition relative">
                     <div className="text-[10px] font-bold uppercase text-neutral-800">Trả phòng</div>
                     <div className="text-sm font-light text-neutral-600 truncate">{end}</div>
                 </div>
             </div>
             {/* Nút chọn Khách */}
             <div className="p-3 cursor-pointer hover:bg-neutral-100 transition relative">
                 <div className="text-[10px] font-bold uppercase text-neutral-800">Khách</div>
                 <div className="text-sm font-light text-neutral-600">1 khách</div>
             </div>
         </div>
      </div>

      <div className="p-4 pt-0">
        <Button 
          disabled={disabled} 
          label="Đặt phòng" 
          onClick={onSubmit}
        />
      </div>

      <div className="p-4 pt-0 flex justify-center text-neutral-500 font-light text-sm">
          Bạn vẫn chưa bị trừ tiền
      </div>
      
      {/* Bảng chi tiết giá (Price Breakdown) */}
      <div className="p-4 pt-0 flex flex-col gap-2 w-full">
         <div className="flex flex-row justify-between text-neutral-500 underline decoration-neutral-500 font-light text-base">
            <div>${price} x 5 đêm</div>
            <div>${totalPrice}</div>
         </div>
         <div className="flex flex-row justify-between text-neutral-500 underline decoration-neutral-500 font-light text-base">
            <div>Phí vệ sinh</div>
            <div>${cleaningFee}</div>
         </div>
         <div className="flex flex-row justify-between text-neutral-500 underline decoration-neutral-500 font-light text-base">
            <div>Phí dịch vụ Airbnb</div>
            <div>${serviceFee}</div>
         </div>
      </div>

      <hr className="mx-4 mb-4" />

      <div className="p-4 pt-0 flex flex-row items-center justify-between font-semibold text-lg text-neutral-800">
        <div>Tổng tiền (trước thuế)</div>
        <div>${totalDisplay}</div>
      </div>
    </div>
   );
}
 
export default ListingReservation;