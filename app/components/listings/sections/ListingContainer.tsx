
import { rooms } from '@/app/data/rooms';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import AnimatedCard from '../cards/AnimatedCard';
import RoomCard from '../cards/RoomCard';

const ListingsContainer = () => {
  const sections = [
    { title: "Khám phá những căn hộ tuyệt vời", subtitle: "Các danh sách phòng cho thuê tại Seoul" },
    { title: "Những chỗ ở phổ biến nhất", subtitle: "Các danh sách phòng cho thuê tại Seoul" },
    { title: "Các căn hộ giá rẻ nhất", subtitle: "Các danh sách phòng cho thuê tại Seoul" },
    { title: "Căn hộ view đẹp", subtitle: "Các danh sách phòng cho thuê tại Seoul" },
    { title: "Studio hiện đại", subtitle: "Các danh sách phòng cho thuê tại Seoul" },
    { title: "Penthouse sang trọng", subtitle: "Các danh sách phòng cho thuê tại Seoul" },
  ];

  return (
    <Container>
      <div className="pt-34 pb-16 space-y-12">
        {sections.map((section, index) => (
          <div key={index}>
            <Heading
              title={section.title}
              subtitle={section.subtitle}
            />
            <div
              className="overflow-x-auto flex gap-2 mt-8 pb-4 hide-scrollbar"
              style={{ scrollBehavior: 'smooth' }}
            >
             {rooms.map((room) => (
              <div key={room.id} className="shrink-0 w-[280px]">
                <AnimatedCard>
                  <RoomCard room={room} />
                </AnimatedCard>
              </div>
            ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ListingsContainer;
