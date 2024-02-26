import { Component } from '@angular/core';
import { ModelService } from '../model.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarModel } from '../types/model.type';
import { ModelColor } from '../types/color.type';
import { ModelConfig } from '../types/config.type';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

  constructor(private modelService : ModelService) {}

  getModel(): CarModel | undefined {
    return this.modelService.selectedModel; 
  }

  getColor(): ModelColor | undefined {
    return this.modelService.selectedModelColor; 
  }

  getConfig(): ModelConfig | undefined {
    return this.modelService.selectedModelConfig; 
  }

  getTowHitchPrice(): number {
    return this.modelService.towHitchPrice; 
  }

  getYokePrice(): number {
    return this.modelService.yokePrice; 
  }

  isTowHitchOpted(): boolean {
    return this.modelService.towHitchOpted; 
  }

  isYokeOpted(): boolean {
    return this.modelService.yokeOpted; 
  }

  getTotalCost(): number {
    const colorPrice: number =  this.modelService.selectedModelColor?.price??0 
    const configPrice: number =  this.modelService.selectedModelConfig?.price??0 
    const towHitchPrice = this.modelService.towHitchOpted?this.modelService.towHitchPrice: 0;
    const yokePrice = this.modelService.yokeOpted?this.modelService.yokePrice: 0;
    const totalCost = colorPrice + configPrice + towHitchPrice + yokePrice;

    return totalCost;
  }


}
