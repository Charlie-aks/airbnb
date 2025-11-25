
import Avatar from "../../ui/Avatar";
import { Room } from "@/app/data/rooms";
import { TbAirConditioning, TbWifi, TbDoorEnter, TbPool } from "react-icons/tb";
import { FaMedal } from "react-icons/fa";

interface ListingInfoProps {
  room: Room;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  room
}) => {
  return ( 
    <div className="col-span-4 flex flex-col gap-8">
      
      <div className="flex flex-col gap-2">
        <div className="
          text-xl 
          font-semibold 
          flex 
          flex-row 
          items-center
          gap-2
        ">
          <div>Toàn bộ căn hộ. Chủ nhà: Host</div>
          <Avatar />
        </div>
        <div className="
          flex 
          flex-row 
          items-center 
          gap-4 
          font-light
          text-neutral-500
        ">
          <div>2 khách</div>
          <div className="text-xs opacity-50">●</div> 
          <div>1 phòng ngủ</div>
          <div className="text-xs opacity-50">●</div>
          <div>1 giường</div>
          <div className="text-xs opacity-50">●</div>
          <div>1 phòng tắm</div>
        </div>
      </div>
      <hr />
      {/* Phần Highlights đặc trưng của Airbnb */}
      <div className="flex flex-col gap-6">
         {/* Item 1 */}
         <div className="flex flex-row items-center gap-4">
             <div className="text-neutral-600"><TbDoorEnter size={28} /></div>
             <div className="flex flex-col">
                 <span className="font-semibold text-neutral-800 text-base">Tự nhận phòng</span>
                 <span className="font-light text-neutral-500">Tự nhận phòng bằng khóa thông minh.</span>
             </div>
         </div>
         
         {/* Item 2 */}
         <div className="flex flex-row items-center gap-4">
             <div className="text-neutral-600"><FaMedal size={24} /></div>
             <div className="flex flex-col">
                 <span className="font-semibold text-neutral-800 text-base">Host là Chủ nhà siêu cấp</span>
                 <span className="font-light text-neutral-500">Chủ nhà siêu cấp là những người có kinh nghiệm, được đánh giá cao.</span>
             </div>
         </div>
      </div>

      <hr />

      {/* Phần Mô tả */}
      <div className="text-lg font-light text-neutral-600 leading-7 text-justify">
           <p className="mb-4">
             Chào mừng bạn đến với <strong>{room.name}</strong>. Tận hưởng không gian sống đẳng cấp tại Seoul.
           </p>
           <p>
             {/* Giả lập nội dung dài */}
             Căn hộ được thiết kế tỉ mỉ đến từng chi tiết, nằm ngay trung tâm thành phố nhưng vẫn giữ được sự yên tĩnh cần thiết.
             Phòng ngủ view toàn cảnh thành phố, đầy đủ tiện nghi bếp, máy giặt, sấy.
             <br/><br/>
             Thích hợp cho cặp đôi hoặc chuyến công tác dài ngày.
           </p>
           
           {/* Nút hiển thị thêm - UI trick */}
           <div className="mt-4 flex items-center gap-1 font-semibold underline cursor-pointer hover:text-neutral-800">
              Hiển thị thêm <span className="text-lg">›</span>
           </div>
      </div>
      
      <hr />

      {/* Phần Tiện nghi - Nơi này có gì */}
      <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-neutral-800">Nơi này có những gì cho bạn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mt-2">
             {/* Cột 1 */}
             <div className="flex flex-row items-center gap-4 text-neutral-600 font-light">
                <TbWifi size={24} />
                <span>Wifi tốc độ cao</span>
             </div>
             <div className="flex flex-row items-center gap-4 text-neutral-600 font-light">
                <TbAirConditioning size={24} />
                <span>Điều hòa nhiệt độ</span>
             </div>
             {/* Cột 2 */}
             <div className="flex flex-row items-center gap-4 text-neutral-600 font-light">
                <TbPool size={24} />
                <span>Hồ bơi chung</span>
             </div>
              {/* Thêm tiện ích giả */}
              <div className="flex flex-row items-center gap-4 text-neutral-600 font-light">
                <span className="text-2xl">📺</span>
                <span>TV 4K HD</span>
             </div>
          </div>
           
           <div className="mt-4">
             <button className="border border-black px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition">
                Hiển thị tất cả 30 tiện nghi
             </button>
           </div>
      </div>
      
    </div>
   );
}
 
export default ListingInfo;