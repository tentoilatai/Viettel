import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface SlideItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="slider-container">
      <div class="slider" #sliderRef>
        <div class="slides" #slidesRef>
          @for (slide of slides; track slide.id) {
            <div class="slide" [id]="'slide-' + slide.id">
              <div class="slide-content">
                <h2 class="slide-title">{{ slide.title }}</h2>
                <p class="slide-description">{{ slide.description }}</p>
                <a [routerLink]="slide.buttonLink" class="slide-button button-primary">{{ slide.buttonText }}</a>
              </div>
              <img [src]="slide.imageUrl" [alt]="slide.title" class="slide-image">
            </div>
          }
        </div>
      </div>
      
      <div class="slider-nav">
        @for (slide of slides; track slide.id; let i = $index) {
          <button 
            class="slider-nav-button" 
            [class.active]="currentSlide === i" 
            (click)="goToSlide(i)">
          </button>
        }
      </div>
    </div>
  `,
  styles: [`
    .slider-container {
      position: relative;
      overflow: hidden;
      margin-top: 60px;
      width: 100%;
      height: 500px;
    }
    
    .slider {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    
    .slides {
      display: flex;
      width: 100%;
      height: 100%;
      transition: transform var(--transition-slow);
    }
    
    .slide {
      flex: 0 0 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .slide-content {
      position: absolute;
      left: 10%;
      top: 50%;
      transform: translateY(-50%);
      max-width: 45%;
      color: white;
      z-index: 10;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    
    .slide-title {
      font-size: 2.5rem;
      margin-bottom: var(--spacing-sm);
      color: white;
    }
    
    .slide-description {
      font-size: 1.1rem;
      margin-bottom: var(--spacing-md);
    }
    
    .slide-button {
      padding: var(--spacing-xs) var(--spacing-md);
      font-size: 1rem;
    }
    
    .slide-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      filter: brightness(0.7);
    }
    
    .slider-nav {
      position: absolute;
      bottom: var(--spacing-md);
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: var(--spacing-xs);
      z-index: 10;
    }
    
    .slider-nav-button {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.5);
      border: none;
      padding: 0;
      cursor: pointer;
      transition: background-color var(--transition-fast), transform var(--transition-fast);
    }
    
    .slider-nav-button.active {
      background-color: var(--viettel-red);
      transform: scale(1.2);
    }
    
    @media (max-width: 992px) {
      .slider-container {
        height: 400px;
      }
      
      .slide-title {
        font-size: 2rem;
      }
    }
    
    @media (max-width: 768px) {
      .slider-container {
        height: 350px;
      }
      
      .slide-content {
        left: 5%;
        max-width: 80%;
      }
      
      .slide-title {
        font-size: 1.8rem;
      }
      
      .slide-description {
        font-size: 1rem;
      }
    }
  `]
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() slides: SlideItem[] = [];
  
  @ViewChild('slidesRef') slidesRef!: ElementRef;
  
  currentSlide = 0;
  autoSlideInterval: any;
  
  ngOnInit() {
    if (this.slides.length === 0) {
      // Default slides if none provided
      this.slides = [
        {
          id: 1,
          imageUrl: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          title: 'Ưu đãi lớn tháng 6',
          description: 'Đăng ký gói cước mới, nhận ngay 50GB data tốc độ cao và miễn phí gọi nội mạng.',
          buttonText: 'Đăng ký ngay',
          buttonLink: '/'
        },
        {
          id: 2,
          imageUrl: 'https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          title: 'Combo tiết kiệm',
          description: 'Kết hợp di động và internet, tiết kiệm đến 30% chi phí hàng tháng.',
          buttonText: 'Tìm hiểu thêm',
          buttonLink: '/'
        },
        {
          id: 3,
          imageUrl: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          title: 'Data không giới hạn',
          description: 'Thoải mái lướt web, xem phim, chơi game với gói cước data không giới hạn.',
          buttonText: 'Xem gói cước',
          buttonLink: '/'
        }
      ];
    }
    
    // Start auto slide
    this.startAutoSlide();
  }
  
  ngAfterViewInit() {
    // Ensure proper slide position on initialization
    this.updateSlidePosition();
  }
  
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }
  
  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }
  
  goToSlide(index: number) {
    this.stopAutoSlide();
    this.currentSlide = index;
    this.updateSlidePosition();
    this.startAutoSlide();
  }
  
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.updateSlidePosition();
  }
  
  previousSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.updateSlidePosition();
  }
  
  updateSlidePosition() {
    if (this.slidesRef) {
      const translateX = this.currentSlide * -100;
      this.slidesRef.nativeElement.style.transform = `translateX(${translateX}%)`;
    }
  }
  
  ngOnDestroy() {
    this.stopAutoSlide();
  }
}