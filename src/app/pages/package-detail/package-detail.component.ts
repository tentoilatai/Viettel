import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PackageService } from '../../shared/services/package.service';
import { Package } from '../../shared/models/package.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-package-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  template: `
    <div class="detail-page">
      <div class="container">
        <a routerLink="/" class="back-link">
          <fa-icon [icon]="faArrowLeft"></fa-icon> Quay lại
        </a>
        
        @if (package) {
          <div class="detail-header">
            <h1 class="detail-title">Gói cước {{ package.name }}</h1>
            <div class="detail-price">{{ package.price | currency:'VND':'symbol-narrow':'1.0-0' }}/tháng</div>
          </div>
          
          <div class="detail-grid">
            <div class="detail-info">
              <div class="info-section">
                <h2>Thông tin gói cước</h2>
                <p>{{ package.description }}</p>
              </div>
              
              <div class="info-section">
                <h2>Ưu đãi</h2>
                <ul class="feature-list">
                  @for (feature of package.features; track $index) {
                    <li class="feature-item">
                      <fa-icon [icon]="faCheck" class="feature-icon"></fa-icon>
                      <span>{{ feature }}</span>
                    </li>
                  }
                </ul>
              </div>
              
              <div class="info-section">
                <h2>Điều khoản & Điều kiện</h2>
                <ul class="terms-list">
                  @for (term of package.termsAndConditions; track $index) {
                    <li class="term-item">{{ term }}</li>
                  }
                </ul>
              </div>
            </div>
            
            <div class="detail-register">
              <div class="register-card">
                <h2>Đăng ký Gói Cước</h2>
                
                <div class="register-section">
                  <h3>Chu kỳ gói cước</h3>
                  <p>{{ package.period }}</p>
                </div>
                
                <div class="register-section">
                  <h3>Mã đăng ký</h3>
                  <div class="register-code">{{ package.code }}</div>
                </div>
                
                <div class="register-section">
                  <h3>Cách đăng ký</h3>
                  <ul class="register-methods">
                    @for (method of package.registrationMethod; track $index) {
                      <li>{{ method }}</li>
                    }
                  </ul>
                </div>
                
                <button class="button-primary register-btn" (click)="onRegister()">Đăng ký ngay</button>
              </div>
            </div>
          </div>
        } @else {
          <div class="loading">
            <div class="spinner"></div>
            <p>Đang tải thông tin gói cước...</p>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .detail-page {
      padding-top: 100px;
      padding-bottom: var(--spacing-xl);
    }
    
    .back-link {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-xs);
      margin-bottom: var(--spacing-md);
      font-family: 'FS Magistral', sans-serif;
      color: var(--viettel-gray);
      transition: color var(--transition-fast);
    }
    
    .back-link:hover {
      color: var(--viettel-red);
    }
    
    .detail-header {
      margin-bottom: var(--spacing-lg);
    }
    
    .detail-title {
      font-size: 2.5rem;
      color: var(--viettel-black);
      margin-bottom: var(--spacing-xs);
    }
    
    .detail-price {
      font-size: 1.8rem;
      color: var(--viettel-red);
      font-weight: 700;
    }
    
    .detail-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: var(--spacing-lg);
    }
    
    .detail-info {
      background-color: var(--viettel-white);
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-medium);
      overflow: hidden;
    }
    
    .info-section {
      padding: var(--spacing-lg);
      border-bottom: 1px solid var(--viettel-light-gray);
    }
    
    .info-section:last-child {
      border-bottom: none;
    }
    
    .info-section h2 {
      font-size: 1.5rem;
      margin-bottom: var(--spacing-md);
      color: var(--viettel-black);
    }
    
    .feature-list {
      list-style: none;
    }
    
    .feature-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: var(--spacing-sm);
    }
    
    .feature-icon {
      color: var(--viettel-red);
      margin-right: var(--spacing-sm);
      flex-shrink: 0;
    }
    
    .terms-list {
      padding-left: var(--spacing-md);
    }
    
    .term-item {
      margin-bottom: var(--spacing-sm);
    }
    
    .detail-register {
      position: sticky;
      top: 100px;
      align-self: flex-start;
    }
    
    .register-card {
      background-color: var(--viettel-white);
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-medium);
      padding: var(--spacing-lg);
    }
    
    .register-card h2 {
      font-size: 1.5rem;
      margin-bottom: var(--spacing-md);
      text-align: center;
      color: var(--viettel-red);
    }
    
    .register-section {
      margin-bottom: var(--spacing-md);
    }
    
    .register-section h3 {
      font-size: 1.1rem;
      margin-bottom: var(--spacing-xs);
      color: var(--viettel-black);
    }
    
    .register-code {
      background-color: var(--viettel-light-gray);
      padding: var(--spacing-sm);
      border-radius: var(--border-radius-sm);
      font-weight: 700;
      font-family: 'FS Magistral', sans-serif;
      text-align: center;
      letter-spacing: 1px;
      margin: var(--spacing-xs) 0;
    }
    
    .register-methods {
      padding-left: var(--spacing-md);
    }
    
    .register-methods li {
      margin-bottom: var(--spacing-xs);
    }
    
    .register-btn {
      width: 100%;
      padding: var(--spacing-sm);
      margin-top: var(--spacing-md);
      font-size: 1.1rem;
    }
    
    .loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: var(--spacing-xl) 0;
    }
    
    .spinner {
      width: 50px;
      height: 50px;
      border: 5px solid var(--viettel-light-gray);
      border-top-color: var(--viettel-red);
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: var(--spacing-md);
    }
    
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
    
    @media (max-width: 992px) {
      .detail-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-md);
      }
      
      .detail-register {
        position: static;
      }
    }
    
    @media (max-width: 768px) {
      .detail-title {
        font-size: 2rem;
      }
      
      .detail-price {
        font-size: 1.5rem;
      }
      
      .info-section {
        padding: var(--spacing-md);
      }
    }
  `]
})
export class PackageDetailComponent implements OnInit {
  package: Package | undefined;
  faCheck = faCheck;
  faArrowLeft = faArrowLeft;
  
  constructor(
    private route: ActivatedRoute,
    private packageService: PackageService
  ) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const packageId = Number(params.get('id'));
      this.loadPackage(packageId);
    });
  }
  
  loadPackage(id: number): void {
    this.packageService.getPackageById(id).subscribe(pkg => {
      this.package = pkg;
    });
  }
  
  onRegister(): void {
    if (this.package) {
      alert(`Bạn sẽ đăng ký gói cước ${this.package.name} bằng cách soạn tin: ${this.package.code} gửi 9123`);
      this.packageService.sendSMS(this.package.code).subscribe();
    }
  }
}