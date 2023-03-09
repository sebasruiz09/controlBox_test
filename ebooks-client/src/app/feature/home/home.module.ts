import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AuthService } from '../services/auth.service';
import { BookCarouselComponent } from './components/book-carousel/book-carousel.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { DragScrollModule } from 'ngx-drag-scroll';

@NgModule({
  declarations: [
    HomeComponent,
    BookCarouselComponent,
    BookCardComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, DragScrollModule],
  providers: [AuthService],
})
export class HomeModule {}
