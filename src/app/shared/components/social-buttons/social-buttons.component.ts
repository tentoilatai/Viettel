import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-buttons',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <div class="social-buttons">
      <a href="tel:18008168" class="social-button phone">
        <fa-icon [icon]="faPhone"></fa-icon>
      </a>
      <a href="https://zalo.me/viettel" target="_blank" class="social-button zalo">
        <span class="zalo-icon">Z</span>
      </a>
      <a href="https://m.me/viettelgroup" target="_blank" class="social-button facebook">
        <fa-icon [icon]="faFacebookF"></fa-icon>
      </a>
    </div>
  `,
  styles: [`
    .social-buttons {
      position: fixed;
      bottom: var(--spacing-md);
      right: var(--spacing-md);
      display: flex;
      flex-direction: column;
      gap: var(--spacing-sm);
      z-index: 999;
    }
    
    .social-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      color: white;
      box-shadow: var(--shadow-medium);
      transition: transform var(--transition-fast);
    }
    
    .social-button:hover {
      transform: scale(1.1);
    }
    
    .phone {
      background-color: #4CAF50;
    }
    
    .zalo {
      background-color: #0068FF;
    }
    
    .zalo-icon {
      font-family: 'FS Magistral', sans-serif;
      font-weight: 700;
      font-size: 1.2rem;
    }
    
    .facebook {
      background-color: #1877F2;
    }
    
    @media (max-width: 576px) {
      .social-buttons {
        bottom: var(--spacing-sm);
        right: var(--spacing-sm);
      }
      
      .social-button {
        width: 45px;
        height: 45px;
      }
    }
  `]
})
export class SocialButtonsComponent {
  faPhone = faPhone;
  faCommentDots = faCommentDots;
  faFacebookF = faFacebookF;
}