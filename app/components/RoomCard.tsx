'use client';

import Image from 'next/image';
import { FaHeart } from 'react-icons/fa6';
import { useState } from 'react';
import { Room } from '@/app/data/rooms';

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const [isFavorite, setIsFavorite] = useState(room.isFavorite);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="group cursor-pointer w-full">
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-lg">
          <Image
            fill
            alt={room.name}
            src={room.image}
            className="object-cover h-full w-full group-hover:scale-110 transition"
          />
          <div className="absolute top-3 right-3">
            <button
              onClick={handleFavoriteClick}
              className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition"
            >
              <FaHeart
                size={20}
                className={isFavorite ? 'text-rose-500' : 'text-gray-400'}
              />
            </button>
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
