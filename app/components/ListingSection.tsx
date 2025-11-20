'use client';

import { useRef } from 'react';
import { FaChevronRight } from 'react-icons/fa6';
import { Room } from '@/app/data/rooms';
import RoomCard from './RoomCard';

interface ListingSectionProps {
  title: string;
  rooms: Room[];
}

const ListingSection: React.FC<ListingSectionProps> = ({ title, rooms }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      if (direction === 'right') {
        scrollContainerRef.current.scrollLeft += scrollAmount;
      } else {
        scrollContainerRef.current.scrollLeft -= scrollAmount;
      }
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold hover:underline cursor-pointer">
          {title}
        </h2>
        <button
          onClick={() => scroll('right')}
          className="p-2 hover:bg-gray-100 rounded-full transition"
          aria-label="Scroll right"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide flex gap-6 pb-4 pl-0"
        style={{ scrollBehavior: 'smooth' }}
      >
        {rooms.map((room) => (
          <div key={room.id}>
            <RoomCard room={room} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingSection;
