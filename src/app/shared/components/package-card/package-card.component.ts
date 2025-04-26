import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Package } from '../../models/package.model';

@Component({
  selector: 'app-package-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="package-card" [class]="'package-' + packageData.category">
      <div class="package-header">
        <h3 class="package-name">{{ packageData.name }}</h3>
        <span class="package-price">{{ packageData.price | currency:'VND':'symbol-narrow':'1.0-0' }}/tháng</span>
      </div>
      
      <div class="package-features">
        @for (feature of packageData.features; track $index) {
          <div class="feature-item">
            <span class="feature-check">✓</span>
            <span class="feature-text">{{ feature }}</span>
          </div>
        }
      </div>
      
      <div class="package-code">
        <span class="code-label">Mã đăng ký:</span>
        <span class="code-value">{{ packageData.code }}</span>
      </div>
      
      <div class="package-actions">
        <a [href]="'sms:9123?body=' + packageData.code" class="button-primary">
          Đăng ký qua SMS
        </a>
        <a [routerLink]="['/package', packageData.id]" class="button-secondary">
          Chi tiết
        </a>
      </div>
    </div>
  `,
  styles: [`
    .package-card {
      background-color: var(--viettel-white);
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-medium);
      padding: var(--spacing-md);
      transition: transform var(--transition-normal), box-shadow var(--transition-normal);
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    
    .package-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-strong);
    }
    
    .package-mobile {
      border-top: 4px solid var(--viettel-red);
    }
    
    .package-data {
      border-top: 4px solid #2196F3;
    }
    
    .package-combo {
      border-top: 4px solid #9C27B0;
    }
    
    .package-header {
      margin-bottom: var(--spacing-md);
      padding-bottom: var(--spacing-sm);
      border-bottom: 1px solid var(--viettel-light-gray);
    }
    
    .package-name {
      font-size: 1.5rem;
      margin-bottom: var(--spacing-xs);
      color: var(--viettel-black);
    }
    
    .package-price {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--viettel-red);
      display: block;
    }
    
    .package-features {
      flex: 1;
      margin-bottom: var(--spacing-md);
    }
    
    .feature-item {
      display: flex;
      margin-bottom: var(--spacing-xs);
      align-items: flex-start;
    }
    
    .feature-check {
      color: var(--viettel-red);
      font-weight: 700;
      margin-right: var(--spacing-xs);
      flex-shrink: 0;
    }
    
    .feature-text {
      font-size: 0.95rem;
    }
    
    .package-code {
      margin-bottom: var(--spacing-md);
      padding: var(--spacing-xs) var(--spacing-sm);
      background-color: var(--viettel-light-gray);
      border-radius: var(--border-radius-sm);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .code-label {
      font-size: 0.9rem;
      color: var(--viettel-gray);
    }
    
    .code-value {
      font-weight: 700;
      font-family: 'FS Magistral', sans-serif;
      letter-spacing: 1px;
    }
    
    .package-actions {
      display: flex;
      gap: var(--spacing-sm);
    }
    
    .package-actions a {
      flex: 1;
      text-align: center;
      padding: var(--spacing-xs) var(--spacing-sm);
      border-radius: var(--border-radius-sm);
      font-size: 0.9rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
    }
    
    @media (max-width: 576px) {
      .package-actions {
        flex-direction: column;
      }
    }
  `]
})
export class PackageCardComponent {
  @Input() packageData!: Package;
  @Output() sendSMS = new EventEmitter<Package>();
}