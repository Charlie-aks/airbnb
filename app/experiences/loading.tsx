'use client';

import Container from "@/app/components/ui/Container";

const Loading = () => {
  return (
    <Container>
      <div className="pt-40 pb-20"> {/* Padding khớp với trang thật */}
        {/* Skeleton Tiêu đề */}
        <div className="h-8 w-48 bg-neutral-200 rounded-md animate-pulse mb-2"></div>
        <div className="h-5 w-64 bg-neutral-200 rounded-md animate-pulse mb-10"></div>

        {/* Skeleton Grid */}
        <div className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
        ">
            {/* Tạo 10 cái khung xương giả */}
            {[...Array(10)].map((_, i) => (
                <div key={i} className="col-span-1">
                    <div className="aspect-[3/4] w-full bg-neutral-200 rounded-xl animate-pulse"></div>
                    <div className="flex flex-col gap-2 mt-2">
                        <div className="h-4 w-3/4 bg-neutral-200 rounded animate-pulse"></div>
                        <div className="h-4 w-1/2 bg-neutral-200 rounded animate-pulse"></div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default Loading;