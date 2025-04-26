import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { faList, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  template: `
    <header [class.scrolled]="scrolled" [class.menu-open]="mobileMenuOpen">
      <div class="container header-container">
        <div class="logo">
          <a routerLink="/">
            <img src="https://i.imgur.com/Crdao3m.png" alt="Viettel Logo" />
          </a>
        </div>
        
        <nav [class.active]="mobileMenuOpen">
          <ul class="nav-list">
            <li><a routerLink="/" (click)="scrollToTop()">Trang chủ</a></li>
            <li><a (click)="scrollToSection('mobile-packages')">Gói cước di động</a></li>
            <li><a (click)="scrollToSection('data-packages')">Gói data</a></li>
            <li><a (click)="scrollToSection('combo-packages')">Gói combo</a></li>
            <li><a (click)="scrollToSection('promotion')">Khuyến mãi</a></li>
          </ul>
        </nav>
        
        <button class="menu-toggle" (click)="toggleMobileMenu()">
          <fa-icon [icon]="mobileMenuOpen ? faTimes : faList"></fa-icon>
        </button>
      </div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      transition: all var(--transition-normal);
      padding: var(--spacing-sm) 0;
      transform: translateY(0);
    }
    
    header.scrolled {
      background-color: rgba(255, 255, 255, 0.98);
      box-shadow: var(--shadow-medium);
      padding: var(--spacing-xs) 0;
    }
    
    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      z-index: 1001;
    }
    
    .logo img {
      height: 40px;
      transition: all var(--transition-normal);
    }
    
    header.scrolled .logo img {
      height: 35px;
    }
    
    .logo img:hover {
      transform: scale(1.05);
    }
    
    nav {
      display: flex;
      align-items: center;
    }
    
    .nav-list {
      display: flex;
      list-style: none;
      gap: var(--spacing-md);
    }
    
    .nav-list li a {
      font-family: 'FS Magistral', sans-serif;
      color: var(--viettel-black);
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.95rem;
      position: relative;
      transition: all var(--transition-normal);
      cursor: pointer;
    }
    
    .nav-list li a:hover {
      color: var(--viettel-red);
    }
    
    .nav-list li a::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 50%;
      background-color: var(--viettel-red);
      transition: all var(--transition-normal);
      transform: translateX(-50%);
    }
    
    .nav-list li a:hover::after {
      width: 100%;
    }
    
    .menu-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      color: var(--viettel-red);
      cursor: pointer;
      z-index: 1001;
      transition: transform var(--transition-fast);
    }
    
    .menu-toggle:hover {
      transform: scale(1.1);
    }
    
    @media (max-width: 768px) {
      .menu-toggle {
        display: block;
      }
      
      nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 70%;
        height: 100vh;
        background-color: var(--viettel-white);
        box-shadow: var(--shadow-strong);
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: right var(--transition-normal) cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 1000;
      }
      
      nav.active {
        right: 0;
      }
      
      .nav-list {
        flex-direction: column;
        align-items: center;
      }
      
      .nav-list li {
        margin: var(--spacing-sm) 0;
        transform: translateX(50px);
        opacity: 0;
        transition: all var(--transition-normal) cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      nav.active .nav-list li {
        transform: translateX(0);
        opacity: 1;
      }
      
      nav.active .nav-list li:nth-child(1) { transition-delay: 0.1s; }
      nav.active .nav-list li:nth-child(2) { transition-delay: 0.2s; }
      nav.active .nav-list li:nth-child(3) { transition-delay: 0.3s; }
      nav.active .nav-list li:nth-child(4) { transition-delay: 0.4s; }
      nav.active .nav-list li:nth-child(5) { transition-delay: 0.5s; }
      
      .nav-list li a {
        font-size: 1.2rem;
        display: block;
        padding: var(--spacing-xs) var(--spacing-md);
      }
      
      header.menu-open {
        background-color: transparent;
        box-shadow: none;
      }
    }
  `]
})
export class HeaderComponent {
  scrolled = false;
  mobileMenuOpen = false;
  faList = faList;
  faTimes = faTimes;
  
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}
  
  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }
  
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    
    if (this.mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  
  closeMobileMenu() {
    this.mobileMenuOpen = false;
    document.body.style.overflow = '';
  }
  
  scrollToTop() {
    this.closeMobileMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  scrollToSection(sectionId: string) {
    this.closeMobileMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}