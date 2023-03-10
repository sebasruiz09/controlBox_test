import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AuthService } from '../services/auth.service';
import { BookCarouselComponent } from './components/book-carousel/book-carousel.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookModalComponent } from './components/book-modal/book-modal.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeGuard } from '../guards/home.guard';
import { ToHttpsPipe } from '../pipes/to-https.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    BookCarouselComponent,
    BookCardComponent,
    BookModalComponent,
    ToHttpsPipe
  ],
  imports: [
    ModalModule,
    CommonModule,
    HomeRoutingModule,
    DragScrollModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService, HomeGuard],
})
export class HomeModule {}
