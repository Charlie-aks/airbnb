// data/rooms.ts

export type Room = {
    id: string;
    name: string;
    image: string;
    price: number;        // giá mỗi đêm (VND)
    rating: number;       // số sao
    reviewCount: number;  // số người đánh giá
    location: string;
    isFavorite: boolean;
  };
  
  export const rooms: Room[] = [
    {
      id: "1",
      name: "Căn hộ studio trung tâm Seoul",
      image: "/images/seoul.avif;",
      price: 890000,
      rating: 4.9,
      reviewCount: 240,
      location: "Myeong-dong, Seoul",
      isFavorite: false,
    },
    {
      id: "2",
      name: "Căn hộ view tháp Namsan",
      image: "/images/seoul2.avif",
      price: 1050000,
      rating: 4.8,
      reviewCount: 198,
      location: "Yongsan, Seoul",
      isFavorite: true,
    },
    {
      id: "3",
      name: "Studio gần Hongdae nightlife",
      image: "/images/seoul3.avif",
      price: 730000,
      rating: 4.7,
      reviewCount: 154,
      location: "Hongdae, Seoul",
      isFavorite: false,
    },
    {
      id: "4",
      name: "Căn hộ cao cấp khu Gangnam",
      image: "/images/seoul4.avif",
      price: 1550000,
      rating: 5.0,
      reviewCount: 410,
      location: "Gangnam, Seoul",
      isFavorite: true,
    },
    {
      id: "5",
      name: "Mini apartment gần Lotte Tower",
      image: "/images/seoul5.avif",
      price: 950000,
      rating: 4.6,
      reviewCount: 120,
      location: "Jamsil, Seoul",
      isFavorite: false,
    },
    {
      id: "6",
      name: "Căn hộ 1 phòng ngủ gần Đại học Yonsei",
      image: "/images/seoul6.avif",
      price: 800000,
      rating: 4.5,
      reviewCount: 89,
      location: "Sinchon, Seoul",
      isFavorite: false,
    },
    {
      id: "7",
      name: "Penthouse sang trọng ngắm toàn cảnh Seoul",
      image: "/images/seoul7.avif",
      price: 2450000,
      rating: 5.0,
      reviewCount: 330,
      location: "Itaewon, Seoul",
      isFavorite: true,
    },
    {
      id: "8",
      name: "Căn hộ tiện nghi gần COEX Mall",
      image: "/images/seoul8.avif",
      price: 1100000,
      rating: 4.8,
      reviewCount: 160,
      location: "Samseong, Seoul",
      isFavorite: false,
    },
  ];
  