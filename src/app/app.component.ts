import {Component} from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';
import { ImageComponent } from './image/image.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, ImageComponent, RouterModule, HttpClientModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = 'Angular';

}
