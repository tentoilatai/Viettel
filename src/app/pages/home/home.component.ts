import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../../shared/components/slider/slider.component';
import { PackageCardComponent } from '../../shared/components/package-card/package-card.component';
import { PackageService } from '../../shared/services/package.service';
import { Package } from '../../shared/models/package.model';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SliderComponent, PackageCardComponent],
  template: `
    <div class="home-page">
      <app-slider></app-slider>
      
      <section class="section" id="mobile-packages">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Gói cước di động</h2>
            <p class="section-subtitle">Lựa chọn phù hợp cho nhu cầu thoại và SMS của bạn</p>
          </div>
          
          <div class="packages-grid" @staggerAnimation>
            @for (pkg of mobilePackages; track pkg.id) {
              <div class="package-item">
                <app-package-card 
                  [packageData]="pkg" 
                  (sendSMS)="onSendSMS($event)">
                </app-package-card>
              </div>
            }
          </div>
        </div>
      </section>
      
      <section class="section section-light" id="data-packages">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Gói data</h2>
            <p class="section-subtitle">Lướt web, xem phim, chơi game không lo hết lưu lượng</p>
          </div>
          
          <div class="packages-grid" @staggerAnimation>
            @for (pkg of dataPackages; track pkg.id) {
              <div class="package-item">
                <app-package-card 
                  [packageData]="pkg" 
                  (sendSMS)="onSendSMS($event)">
                </app-package-card>
              </div>
            }
          </div>
        </div>
      </section>
      
      <section class="section" id="combo-packages">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Gói combo</h2>
            <p class="section-subtitle">Tất cả trong một: thoại, SMS và data với giá tiết kiệm</p>
          </div>
          
          <div class="packages-grid" @staggerAnimation>
            @for (pkg of comboPackages; track pkg.id) {
              <div class="package-item">
                <app-package-card 
                  [packageData]="pkg" 
                  (sendSMS)="onSendSMS($event)">
                </app-package-card>
              </div>
            }
          </div>
        </div>
      </section>
      
      <section class="section section-promotion" id="promotion">
        <div class="container">
          <div class="promotion-content">
            <div class="promotion-text">
              <h2>Đăng ký ngay hôm nay</h2>
              <p>Nhận ưu đãi thêm 50% data trong 3 tháng đầu tiên khi đăng ký mới. Chương trình có hạn, nhanh tay đăng ký ngay!</p>
              <button class="button-primary">Đăng ký ưu đãi</button>
            </div>
            <div class="promotion-image">
              <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Promotion" />
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .section {
      padding: var(--spacing-xl) 0;
    }
    
    .section-light {
      background-color: #f8f9fa;
    }
    
    .section-header {
      text-align: center;
      margin-bottom: var(--spacing-xl);
    }
    
    .section-title {
      font-size: 2rem;
      color: var(--viettel-black);
      position: relative;
      display: inline-block;
      padding-bottom: var(--spacing-sm);
      margin-bottom: var(--spacing-xs);
    }
    
    .section-title::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background-color: var(--viettel-red);
    }
    
    .section-subtitle {
      font-size: 1.1rem;
      color: var(--viettel-gray);
      max-width: 600px;
      margin: 0 auto;
    }
    
    .packages-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: var(--spacing-lg);
    }
    
    .package-item {
      height: 100%;
    }
    
    .section-promotion {
      background-color: var(--viettel-black);
      color: var(--viettel-white);
    }
    
    .promotion-content {
      display: flex;
      align-items: center;
      gap: var(--spacing-xl);
    }
    
    .promotion-text {
      flex: 1;
    }
    
    .promotion-text h2 {
      color: var(--viettel-white);
      font-size: 2rem;
      margin-bottom: var(--spacing-md);
    }
    
    .promotion-text p {
      font-size: 1.1rem;
      margin-bottom: var(--spacing-md);
      opacity: 0.9;
    }
    
    .promotion-image {
      flex: 1;
      border-radius: var(--border-radius-md);
      overflow: hidden;
    }
    
    .promotion-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform var(--transition-slow);
    }
    
    .promotion-image:hover img {
      transform: scale(1.05);
    }
    
    @media (max-width: 992px) {
      .promotion-content {
        flex-direction: column;
      }
      
      .promotion-text {
        text-align: center;
        margin-bottom: var(--spacing-md);
      }
    }
    
    @media (max-width: 768px) {
      .section {
        padding: var(--spacing-lg) 0;
      }
      
      .section-title {
        font-size: 1.8rem;
      }
      
      .packages-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: var(--spacing-md);
      }
    }
  `],
  animations: [
    trigger('staggerAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  mobilePackages: Package[] = [];
  dataPackages: Package[] = [];
  comboPackages: Package[] = [];
  
  constructor(private packageService: PackageService) { }
  
  ngOnInit(): void {
    this.loadPackages();
  }
  
  loadPackages(): void {
    this.packageService.getPackagesByCategory('mobile').subscribe(packages => {
      this.mobilePackages = packages;
    });
    
    this.packageService.getPackagesByCategory('data').subscribe(packages => {
      this.dataPackages = packages;
    });
    
    this.packageService.getPackagesByCategory('combo').subscribe(packages => {
      this.comboPackages = packages;
    });
  }
  
  onSendSMS(pkg: Package): void {
    // In a real application, this would trigger a modal asking for confirmation
    // or directly send the SMS if supported by the device
    alert(`Bạn sẽ đăng ký gói cước ${pkg.name} bằng cách soạn tin: ${pkg.code} gửi 9123`);
    this.packageService.sendSMS(pkg.code).subscribe();
  }
}