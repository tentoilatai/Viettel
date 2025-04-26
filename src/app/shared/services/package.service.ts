import { Injectable } from '@angular/core';
import { Package } from '../models/package.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private packages: Package[] = [
    {
      id: 1,
      name: 'V120',
      code: 'DK V120',
      price: 120000,
      category: 'mobile',
      features: [
        'Miễn phí 1000 phút gọi nội mạng Viettel',
        '500 phút gọi ngoại mạng',
        '5GB data tốc độ cao mỗi ngày',
        'Miễn phí nhắn tin nội mạng'
      ],
      description: 'Gói cước V120 là lựa chọn lý tưởng cho người dùng có nhu cầu liên lạc và lướt web cao. Với V120, bạn có thể thoải mái gọi điện, nhắn tin và sử dụng data mà không lo về cước phí.',
      period: '30 ngày',
      registrationMethod: [
        'Soạn DK V120 gửi 9123',
        'Qua ứng dụng My Viettel',
        'Liên hệ cửa hàng Viettel gần nhất'
      ],
      termsAndConditions: [
        'Gói cước áp dụng cho thuê bao di động trả trước và trả sau của Viettel',
        'Chu kỳ gói cước là 30 ngày kể từ ngày đăng ký thành công',
        'Hết chu kỳ, gói cước sẽ tự động gia hạn nếu tài khoản đủ tiền',
        'Để hủy gói, soạn HUY V120 gửi 9123'
      ]
    },
    {
      id: 2,
      name: 'V90',
      code: 'DK V90',
      price: 90000,
      category: 'mobile',
      features: [
        'Miễn phí 500 phút gọi nội mạng Viettel',
        '300 phút gọi ngoại mạng',
        '3GB data tốc độ cao mỗi ngày',
        'Miễn phí nhắn tin nội mạng'
      ],
      description: 'Gói cước V90 là sự lựa chọn cân bằng cho người dùng có nhu cầu liên lạc và lướt web vừa phải. Với V90, bạn có thể thoải mái gọi điện, nhắn tin và sử dụng data với chi phí hợp lý.',
      period: '30 ngày',
      registrationMethod: [
        'Soạn DK V90 gửi 9123',
        'Qua ứng dụng My Viettel',
        'Liên hệ cửa hàng Viettel gần nhất'
      ],
      termsAndConditions: [
        'Gói cước áp dụng cho thuê bao di động trả trước và trả sau của Viettel',
        'Chu kỳ gói cước là 30 ngày kể từ ngày đăng ký thành công',
        'Hết chu kỳ, gói cước sẽ tự động gia hạn nếu tài khoản đủ tiền',
        'Để hủy gói, soạn HUY V90 gửi 9123'
      ]
    },
    {
      id: 3,
      name: 'D60',
      code: 'DK D60',
      price: 60000,
      category: 'data',
      features: [
        '2GB data tốc độ cao mỗi ngày (60GB/tháng)',
        'Không giới hạn dung lượng data tốc độ thường',
        'Miễn phí xem các ứng dụng giải trí nội dung Viettel',
        'Tốc độ download lên tới 300Mbps'
      ],
      description: 'Gói cước D60 là lựa chọn hoàn hảo cho người dùng cần nhiều data để lướt web, xem phim, nghe nhạc. Với D60, bạn có thể thoải mái sử dụng internet mà không lo hết dung lượng.',
      period: '30 ngày',
      registrationMethod: [
        'Soạn DK D60 gửi 9123',
        'Qua ứng dụng My Viettel',
        'Liên hệ cửa hàng Viettel gần nhất'
      ],
      termsAndConditions: [
        'Gói cước áp dụng cho thuê bao di động trả trước và trả sau của Viettel',
        'Chu kỳ gói cước là 30 ngày kể từ ngày đăng ký thành công',
        'Hết chu kỳ, gói cước sẽ tự động gia hạn nếu tài khoản đủ tiền',
        'Để hủy gói, soạn HUY D60 gửi 9123'
      ]
    },
    {
      id: 4,
      name: 'D30',
      code: 'DK D30',
      price: 30000,
      category: 'data',
      features: [
        '1GB data tốc độ cao mỗi ngày (30GB/tháng)',
        'Không giới hạn dung lượng data tốc độ thường',
        'Miễn phí xem các ứng dụng giải trí nội dung Viettel',
        'Tốc độ download lên tới 150Mbps'
      ],
      description: 'Gói cước D30 là lựa chọn kinh tế cho người dùng cần data để lướt web hàng ngày. Với D30, bạn có thể thoải mái sử dụng internet với chi phí hợp lý.',
      period: '30 ngày',
      registrationMethod: [
        'Soạn DK D30 gửi 9123',
        'Qua ứng dụng My Viettel',
        'Liên hệ cửa hàng Viettel gần nhất'
      ],
      termsAndConditions: [
        'Gói cước áp dụng cho thuê bao di động trả trước và trả sau của Viettel',
        'Chu kỳ gói cước là 30 ngày kể từ ngày đăng ký thành công',
        'Hết chu kỳ, gói cước sẽ tự động gia hạn nếu tài khoản đủ tiền',
        'Để hủy gói, soạn HUY D30 gửi 9123'
      ]
    },
    {
      id: 5,
      name: 'C180',
      code: 'DK C180',
      price: 180000,
      category: 'combo',
      features: [
        'Miễn phí gọi nội mạng Viettel không giới hạn',
        '700 phút gọi ngoại mạng',
        '4GB data tốc độ cao mỗi ngày',
        'Miễn phí nhắn tin nội mạng, ngoại mạng',
        'Miễn phí xem phim trên ứng dụng TV360'
      ],
      description: 'Gói combo C180 là giải pháp trọn gói cho người dùng đòi hỏi cao về liên lạc và giải trí. Với C180, bạn có thể thoải mái gọi điện, nhắn tin, lướt web và thưởng thức các dịch vụ giải trí cao cấp.',
      period: '30 ngày',
      registrationMethod: [
        'Soạn DK C180 gửi 9123',
        'Qua ứng dụng My Viettel',
        'Liên hệ cửa hàng Viettel gần nhất'
      ],
      termsAndConditions: [
        'Gói cước áp dụng cho thuê bao di động trả trước và trả sau của Viettel',
        'Chu kỳ gói cước là 30 ngày kể từ ngày đăng ký thành công',
        'Hết chu kỳ, gói cước sẽ tự động gia hạn nếu tài khoản đủ tiền',
        'Để hủy gói, soạn HUY C180 gửi 9123'
      ]
    },
    {
      id: 6,
      name: 'C150',
      code: 'DK C150',
      price: 150000,
      category: 'combo',
      features: [
        'Miễn phí 1000 phút gọi nội mạng Viettel',
        '500 phút gọi ngoại mạng',
        '3GB data tốc độ cao mỗi ngày',
        'Miễn phí nhắn tin nội mạng',
        'Miễn phí nghe nhạc trên ứng dụng iMusic'
      ],
      description: 'Gói combo C150 mang đến giải pháp trọn gói với chi phí hợp lý cho người dùng đòi hỏi cao về liên lạc và giải trí. Với C150, bạn có thể thoải mái gọi điện, nhắn tin, lướt web và thưởng thức các dịch vụ giải trí.',
      period: '30 ngày',
      registrationMethod: [
        'Soạn DK C150 gửi 9123',
        'Qua ứng dụng My Viettel',
        'Liên hệ cửa hàng Viettel gần nhất'
      ],
      termsAndConditions: [
        'Gói cước áp dụng cho thuê bao di động trả trước và trả sau của Viettel',
        'Chu kỳ gói cước là 30 ngày kể từ ngày đăng ký thành công',
        'Hết chu kỳ, gói cước sẽ tự động gia hạn nếu tài khoản đủ tiền',
        'Để hủy gói, soạn HUY C150 gửi 9123'
      ]
    }
  ];
  
  constructor() { }
  
  getAllPackages(): Observable<Package[]> {
    return of(this.packages);
  }
  
  getPackagesByCategory(category: string): Observable<Package[]> {
    return of(this.packages.filter(pkg => pkg.category === category));
  }
  
  getPackageById(id: number): Observable<Package | undefined> {
    return of(this.packages.find(pkg => pkg.id === id));
  }
  
  sendSMS(packageCode: string): Observable<boolean> {
    const smsNumber = '9123';
    const smsBody = packageCode;
    const smsUrl = `sms:${smsNumber}?body=${encodeURIComponent(smsBody)}`;
    window.location.href = smsUrl;
    return of(true);
  }
}