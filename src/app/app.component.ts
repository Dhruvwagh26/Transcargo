import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { Page1Component } from './page1/page1.component';
import { ServicesComponent } from './services/services.component';
import { SwiperModule } from 'swiper/types/shared';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ContactComponent } from './contact/contact.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ServicesComponent, Page1Component,ContactComponent, HomepageComponent,RouterOutlet, CarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website';
}
