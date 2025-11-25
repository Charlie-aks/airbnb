
import Image from "next/image";
import Heading from "../../ui/Heading";
import { FaHeart, FaShareFromSquare } from "react-icons/fa6";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  images: string[]; 
  id: string;
}
const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  images,
}) => {
  return ( 
    <>
      <div className="flex flex-col gap-2 mb-6 md:flex-row md:justify-between md:items-center mt-10">
        <Heading title={title} subtitle={locationValue} />
        <div className="flex flex-row items-center justify-end gap-4 text-sm font-semibold underline cursor-pointer">
            <div className="flex flex-row items-center gap-2 hover:bg-neutral-100 py-2 px-4 rounded-md transition"><FaShareFromSquare /> Chia sẻ</div>
            <div className="flex flex-row items-center gap-2 hover:bg-neutral-100 py-2 px-4 rounded-md transition"><FaHeart /> Lưu</div>
        </div>
      </div>
      <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
        <div className="grid grid-cols-4 grid-rows-2 gap-2 h-full">
            <div className="col-span-2 row-span-2 relative cursor-pointer hover:opacity-90 transition">
                <Image
                  src={images[0]}
                  fill
                  alt="Main Image"
                  className="object-cover"
                />
            </div>
            {images.slice(1, 5).map((img, index) => (
                <div key={index} className="col-span-1 row-span-1 relative cursor-pointer hover:opacity-90 transition">
                    <Image
                      src={img}
                      fill
                      alt={`Sub Image ${index}`}
                      className="object-cover"
                    />
                </div>
            ))}
        </div>   
        <div className="absolute bottom-5 right-5 bg-white border border-black px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-gray-100 transition cursor-pointer shadow-md">
            Hiển thị tất cả ảnh
        </div>
      </div>
    </>
   );
}
 
export default ListingHead;