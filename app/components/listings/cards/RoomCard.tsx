'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation'; // 1. Import useRouter
import { Room } from '@/app/data/rooms';
import { AiOutlineHeart } from 'react-icons/ai';

interface RoomCardProps {
  room: Room;
}
const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const router = useRouter(); 
  return (
    <div 
      onClick={() => router.push(`/listings/${room.id}`)}
      className="group cursor-pointer w-full"
    >
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-lg">
          <Image
            fill
            alt={room.name}
            src={room.images[0]}
            className="object-cover h-full w-full group-hover:scale-110 transition"
          />
          <div className="absolute top-3 right-3">
              <div className="absolute top-3 right-3">
                <div className="hover:opacity-80 transition cursor-pointer relative">
                  <AiOutlineHeart size={28} className="fill-white absolute -top-0.5 -right-0.5" />
                  <AiOutlineHeart size={24} className="fill-neutral-500/70" />
                </div>
              </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-base font-semibold truncate">
            {room.name}
          </p>
          <p className="text-neutral-600 text-sm">
            {room.location}
          </p>
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold">★ {room.rating}</span>
            <span className="text-sm text-neutral-500">({room.reviewCount})</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-base font-semibold">
              ₩{room.price.toLocaleString("ko-KR")}
            </span>
            <span className="text-sm text-neutral-500">/đêm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;