import {Component} from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';
import { ImageComponent } from './image/image.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ModelService } from './model.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, ImageComponent, RouterModule, HttpClientModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = 'Angular';
  isStep2Disabled : Boolean = true;
  isStep3Disabled : Boolean = true;

  constructor(modelService:ModelService){
    modelService.modelCodeValue.subscribe(data=>{
      if(data != ""){
        this.isStep2Disabled=false;
      }
    })

    modelService.modelConfigValue.subscribe(data=>{
      if(data != "") {
        this.isStep3Disabled=false;
      }
    })

    
  
  }

  
}
