export type Experience = {
    id: string;
    name: string;
    images: string[];
    price: number;       
    rating: number;     
    reviewCount: number;
    location: string;
    isFavorite: boolean;
    category: string;     
    duration: string;     
  };
  
  export const experiences: Experience[] = [
    {
      id: "exp_1",
      name: "Lớp học làm Kimchi truyền thống với Chuyên gia",
      images: ["/images/experiences/experiences.avif", "/images/experiences/experiences.avif", "/images/experiences/experiences.avif", "/images/experiences/experiences.avif"],
      price: 650000,
      rating: 4.95,
      reviewCount: 1205,
      location: "Bukchon Hanok Village, Seoul",
      isFavorite: true,
      category: "Ẩm thực",
      duration: "2 giờ",
    },
    {
      id: "exp_2",
      name: "Tour chụp ảnh Hanbok tại Cung điện Gyeongbokgung",
      images: ["/images/experiences/anh4.avif", "/images/experiences/anh4.avif", "/images/experiences/anh4.avif", "/images/experiences/anh4.avif"],
      price: 1200000,
      rating: 4.88,
      reviewCount: 850,
      location: "Jongno-gu, Seoul",
      isFavorite: false,
      category: "Nhiếp ảnh",
      duration: "1.5 giờ",
    },
    {
      id: "exp_3",
      name: "Khám phá Pub & Nightlife tại Hongdae",
      images: ["/images/experiences/anh2.avif", "/images/experiences/anh2.avif", "/images/experiences/anh2.avif", "/images/experiences/anh2.avif"],
      price: 550000,
      rating: 4.75,
      reviewCount: 340,
      location: "Hongdae, Seoul",
      isFavorite: false,
      category: "Đời sống về đêm",
      duration: "3 giờ",
    },
    {
      id: "exp_4",
      name: "Lớp nhảy K-Pop cơ bản quay Video TikTok",
      images: ["/images/experiences/anh2.avif", "/images/experiences/anh2.avif", "/images/experiences/anh2.avif", "/images/experiences/anh2.avif"],
      price: 800000,
      rating: 4.98,
      reviewCount: 2100,
      location: "Gangnam, Seoul",
      isFavorite: true,
      category: "Nghệ thuật & Biểu diễn",
      duration: "2 giờ",
    },
    {
      id: "exp_5",
      name: "Tự làm nước hoa Signature của riêng bạn",
      images: ["/images/experiences/anh2.avif", "/images/experiences/anh2.avif", "/images/experiences/anh2.avif", "/images/experiences/anh2.avif"],
      price: 1100000,
      rating: 4.92,
      reviewCount: 450,
      location: "Seongsu-dong, Seoul",
      isFavorite: false,
      category: "Thủ công",
      duration: "1.5 giờ",
    },
    {
      id: "exp_6",
      name: "Hiking đỉnh núi Bukhansan & Ăn trưa",
      images: ["/images/experiences/anh2.avif", "/images/experiences/anh2.avif", "/images/experiences/anh2.avif", "/images/experiences/anh2.avif"],
      price: 950000,
      rating: 4.85,
      reviewCount: 120,
      location: "Bukhansan, Seoul",
      isFavorite: false,
      category: "Thiên nhiên & Ngoài trời",
      duration: "5 giờ",
    },
    {
      id: "exp_7",
      name: "Phân tích màu sắc cá nhân (Personal Color)",
      images: ["/images/experiences/anh3.avif", "/images/experiences/anh3.avif", "/images/experiences/anh3.avif", "/images/experiences/anh3.avif"],
      price: 2500000,
      rating: 5.0,
      reviewCount: 600,
      location: "Sinsa-dong, Seoul",
      isFavorite: true,
      category: "Thời trang & Làm đẹp",
      duration: "1 giờ",
    },
    {
      id: "exp_8",
      name: "Tour ẩm thực đường phố chợ Gwangjang",
      images: ["/images/experiences/anh2.avif", "/images/experiences/anh2", "/images/experiences/anh2", "/images/experiences/anh2"],
      price: 700000,
      rating: 4.80,
      reviewCount: 980,
      location: "Jongno-gu, Seoul",
      isFavorite: false,
      category: "Ẩm thực",
      duration: "2.5 giờ",
    },
  ];