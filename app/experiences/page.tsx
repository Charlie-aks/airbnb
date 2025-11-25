'use client';

import Container from "@/app/components/ui/Container";
import Heading from "@/app/components/ui/Heading";
import ExperienceCard from "@/app/components/listings/cards/ExperienceCard"; 
import EmptyState from "@/app/components/ui/EmptyState"; 
import ClientOnly from "@/app/components/ui/ClientOnly";
import AnimatedCard from "@/app/components/listings/cards/AnimatedCard";

import { experiences } from "@/app/data/experiences"; 

const ExperiencePage = () => {
  if (experiences.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  const sections = [
    { title: "Văn hóa & Nghệ thuật", subtitle: "Khám phá di sản đậm đà bản sắc" },
    { title: "Ẩm thực đường phố", subtitle: "Nếm thử hương vị Seoul đích thực" },
    { title: "Hoạt động ngoài trời", subtitle: "Hòa mình vào thiên nhiên" },
    { title: "Giải trí & Nightlife", subtitle: "Sôi động cùng nhịp sống đêm" },
    { title: "Lớp học thủ công", subtitle: "Tự tay làm quà lưu niệm" },
  ];

  return (
    <Container>
      <div className="pt-40 pb-20 space-y-12">   
        {sections.map((section, index) => (
          <div key={index}>
            <Heading 
              title={section.title} 
              subtitle={section.subtitle} 
            />
            <div 
                className="
                  overflow-x-auto 
                  flex 
                  gap-4 
                  mt-8 
                  pb-4 
                  hide-scrollbar /* Nhớ thêm class này trong global css nếu muốn ẩn thanh cuộn */
                "
                style={{ scrollBehavior: 'smooth' }}
            >
              {experiences.map((item) => (
                <div key={item.id} className="shrink-0 w-[260px]"> 
                  <AnimatedCard> 
                    <ExperienceCard data={item} />
                  </AnimatedCard>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ExperiencePage;