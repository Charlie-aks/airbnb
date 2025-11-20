'use client';

import { rooms } from '@/app/data/rooms';
import Container from './Container';
import Heading from './Heading';
import ListingSection from './ListingSection';

const ListingsContainer = () => {
  const section1Rooms = rooms.slice(0, 4);
  const section2Rooms = rooms.slice(4, 8);

  return (
    <Container>
      <div className="pt-20 pb-20">
        <Heading
          title="Khám phá những căn hộ tuyệt vời"
          subtitle="Các danh sách phòng cho thuê tại Seoul"
        />
        <div className="space-y-12">
          <ListingSection
            title="Chỗ ở gần Thập Nhị Seoul >"
            rooms={section1Rooms}
          />
          <ListingSection
            title="Con phòng trong những ngày tương lai >"
            rooms={section2Rooms}
          />
        </div>
      </div>
    </Container>
  );
};

export default ListingsContainer;
