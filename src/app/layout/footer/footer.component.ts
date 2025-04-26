import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  template: `
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-column">
            <div class="footer-logo">
              <img src="https://viettel.com.vn/media/viettel/original_images/Viettel_logo_2021.png" alt="Viettel Logo" />
            </div>
            <p>Tập đoàn Công nghiệp - Viễn thông Quân đội</p>
            <div class="contact-info">
              <div class="contact-item">
                <fa-icon [icon]="faPhone"></fa-icon>
                <span>Hotline: 18008168</span>
              </div>
              <div class="contact-item">
              <fa-icon [icon]="faEnvelope"></fa-icon>
              <span>Email: viettel&#64;viettel.com.vn</span>
              </div>
              <div class="contact-item">
                <fa-icon [icon]="faMapMarkerAlt"></fa-icon>
                <span>Trụ sở: Số 1 Giang Văn Minh, Kim Mã, Ba Đình, Hà Nội</span>
              </div>
            </div>
          </div>
          
          <div class="footer-column">
            <h3>Dịch vụ</h3>
            <ul class="footer-links">
              <li><a routerLink="/" fragment="mobile-packages">Gói cước di động</a></li>
              <li><a routerLink="/" fragment="data-packages">Gói data</a></li>
              <li><a routerLink="/" fragment="combo-packages">Gói combo</a></li>
              <li><a href="#">Đăng ký/Hủy gói cước</a></li>
              <li><a href="#">Kiểm tra gói cước</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3>Hỗ trợ</h3>
            <ul class="footer-links">
              <li><a href="#">Hướng dẫn đăng ký</a></li>
              <li><a href="#">Câu hỏi thường gặp</a></li>
              <li><a href="#">Điều khoản sử dụng</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Liên hệ</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3>Kết nối với chúng tôi</h3>
            <div class="social-icons">
              <a href="https://facebook.com/viettelgroup" target="_blank" class="social-icon">
                <fa-icon [icon]="faFacebook"></fa-icon>
              </a>
              <a href="https://twitter.com/viettelgroup" target="_blank" class="social-icon">
                <fa-icon [icon]="faTwitter"></fa-icon>
              </a>
              <a href="https://youtube.com/viettelgroup" target="_blank" class="social-icon">
                <fa-icon [icon]="faYoutube"></fa-icon>
              </a>
              <a href="https://instagram.com/viettelgroup" target="_blank" class="social-icon">
                <fa-icon [icon]="faInstagram"></fa-icon>
              </a>
            </div>
            <div class="app-download">
              <h4>Tải ứng dụng My Viettel</h4>
              <div class="store-buttons">
                <a href="https://apps.apple.com/vn/app/my-viettel/id1023709930" target="_blank">
                  <img src="https://i.imgur.com/7y96sqE.png" alt="App Store" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.viettel.customer" target="_blank">
                  <img src="https://i.imgur.com/rjGzSge.png" alt="Google Play" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 Tập đoàn Viettel. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background-color: var(--viettel-black);
      color: var(--viettel-white);
      padding: var(--spacing-xl) 0 var(--spacing-md);
      margin-top: var(--spacing-xl);
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--spacing-lg);
    }
    
    .footer-logo img {
      height: 50px;
      margin-bottom: var(--spacing-sm);
    }
    
    .contact-info {
      margin-top: var(--spacing-md);
    }
    
    .contact-item {
      display: flex;
      align-items: center;
      margin-bottom: var(--spacing-xs);
      font-size: 0.9rem;
    }
    
    .contact-item fa-icon {
      color: var(--viettel-red);
      margin-right: var(--spacing-xs);
      font-size: 1rem;
    }
    
    h3 {
      color: var(--viettel-white);
      font-size: 1.2rem;
      margin-bottom: var(--spacing-md);
      position: relative;
      padding-bottom: var(--spacing-xs);
    }
    
    h3::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      width: 50px;
      background-color: var(--viettel-red);
    }
    
    .footer-links {
      list-style: none;
    }
    
    .footer-links li {
      margin-bottom: var(--spacing-xs);
    }
    
    .footer-links a {
      color: var(--viettel-light-gray);
      font-size: 0.95rem;
      transition: color var(--transition-fast);
    }
    
    .footer-links a:hover {
      color: var(--viettel-white);
      padding-left: var(--spacing-xs);
    }
    
    .social-icons {
      display: flex;
      gap: var(--spacing-sm);
      margin-bottom: var(--spacing-md);
    }
    
    .social-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: var(--viettel-gray);
      color: var(--viettel-white);
      border-radius: 50%;
      transition: background-color var(--transition-fast), transform var(--transition-fast);
    }
    
    .social-icon:hover {
      background-color: var(--viettel-red);
      transform: translateY(-3px);
    }
    
    .store-buttons {
      display: flex;
      gap: var(--spacing-sm);
      margin-top: var(--spacing-xs);
    }
    
    .store-buttons img {
      height: 35px;
      transition: transform var(--transition-fast);
    }
    
    .store-buttons img:hover {
      transform: scale(1.05);
    }
    
    .footer-bottom {
      margin-top: var(--spacing-xl);
      padding-top: var(--spacing-md);
      border-top: 1px solid var(--viettel-gray);
      text-align: center;
      font-size: 0.9rem;
      color: var(--viettel-light-gray);
    }
    
    @media (max-width: 992px) {
      .footer-content {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: var(--spacing-md);
      }
      
      .footer-column {
        margin-bottom: var(--spacing-md);
      }
      
      h3 {
        margin-bottom: var(--spacing-sm);
      }
    }
  `]
})
export class FooterComponent {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faInstagram = faInstagram;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
}