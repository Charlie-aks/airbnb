'use client';

import Container from './Container';

const Footer = () => {
  const footerSections = [
    {
      title: 'Hỗ trợ',
      links: [
        'Trung tâm trợ giúp',
        'An toàn',
        'Hủy đặt phòng',
        'Các tùy chọn hủy bỏ',
        'Cách chúng tôi kiểm duyệt',
      ],
    },
    {
      title: 'Cộng đồng',
      links: [
        'Airbnb.org: nhà cho tất cả',
        'Chống phân biệt đối xử',
      ],
    },
    {
      title: 'Dân sắc hàng cho những kỳ nghỉ sau này',
      links: [
        'Savannah',
        'Manhattan',
        'Kansas City',
        'Richmond City',
        'Portland',
        'Nashville',
        'Scottsdale',
        'Key West',
        'Gulf Shores',
        'Halo-Halo',
      ],
    },
    {
      title: 'Dân sắc hàng',
      links: [
        'Các Địa Điểm Airbnb',
        'Dữa Liệu Ngoài Airbnb',
        'Dữa liệu về các kỳ nghỉ Airbnb',
        'Airbnb này hoạt',
        'Tìm hiểu về chủ sở hữu',
        'Đặc biệt có cơ hội chuyến đi',
        'Đặc biệt các lựa chọn',
        'Dân sắc hàng các tin',
      ],
    },
    {
      title: 'Airbnb',
      links: [
        'Công ty về Airbnb',
        'Tạo phòng',
        'Trong tôi',
        'Các tùy chọn',
        'Từng cách sắp xếp',
        'An toàn bảo mật',
      ],
    },
  ];

  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-12">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-5 gap-8 pb-12">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-sm mb-4 text-gray-900">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-sm text-gray-700 hover:text-gray-900 hover:underline"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-300 pt-8">
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-600">
                © 2025 Airbnb, Inc. · Quyền Riêng tư · Điều khoản
              </p>
              <div className="flex items-center gap-4">
                <button className="text-gray-700 text-sm hover:text-gray-900">
                  Tiếng Việt · ₫ VND
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
