'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Experience } from "@/app/data/experiences"; 
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

interface ExperienceCardProps {
  data: Experience;
  disabled?: boolean;
  onAction?: (id: string) => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  data,
  disabled,
  onAction
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (disabled) return;
    
    if (onAction) {
       onAction(data.id);
    } else {
       // Chuyển hướng đến trang chi tiết trải nghiệm (sẽ tạo sau)
       router.push(`/experiences/${data.id}`);
    }
  }

  return ( 
    <div 
      onClick={handleClick}
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        {/* 1. HÌNH ẢNH - Tỷ lệ dọc 4:4 */}
        <div className="
            aspect-[4/4] 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
        ">
            <Image
              fill
              alt="Experience"
              src={data.images[0]}
              className="
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              "
            />
            {/* Nút Tim yêu thích (Giao diện giả lập) */}
            <div className="absolute top-3 right-3">
                 <div className="hover:opacity-80 transition cursor-pointer relative">
                    <AiOutlineHeart size={28} className="fill-white absolute -top-[2px] -right-[2px]" />
                    <AiOutlineHeart size={24} className="fill-neutral-500/70" />
                 </div>
            </div>
        </div>

        {/* 2. THÔNG TIN CHI TIẾT */}
        
        {/* Dòng 1: Rating + Review + Quốc gia */}
        <div className="flex flex-row items-center gap-1 text-sm mt-1">
             <AiFillStar size={14} className="text-black" />
             <span className="font-medium">{data.rating}</span>
             <span className="font-light text-neutral-500">({data.reviewCount})</span>
             <span className="font-light text-neutral-500">•</span>
             <span className="font-light text-neutral-500 truncate text-xs">{data.location}</span>
        </div>

        {/* Dòng 2: Tên trải nghiệm */}
        <div className="font-light text-neutral-500 text-base leading-5 line-clamp-2">
            {data.name}
        </div>

        {/* Dòng 3: Loại hình & Thời lượng (Điểm nhấn của Experience) */}
        <div className="font-bold text-sm text-neutral-800 mt-0.5">
             {data.category} <span className="font-normal text-neutral-500">•</span> {data.duration}
        </div>

        {/* Dòng 4: Giá tiền */}
        <div className="flex flex-row items-center gap-1 mt-1 text-sm">
            <span className="font-bold">
                Từ {data.price.toLocaleString('vi-VN')}₫
            </span>
            <span className="font-light text-neutral-500">
                / người
            </span>
        </div>

      </div>
    </div>
   );
}
 
export default ExperienceCard;