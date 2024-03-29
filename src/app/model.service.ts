import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CarModel } from './types/model.type';
import { ModelColor } from './types/color.type';
import { ModelConfig } from './types/config.type';
import { ModelCofigList } from './types/configs.type';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http: HttpClient) { }

  selectedModel?: CarModel 
  selectedModelColor?: ModelColor 
  selectedModelConfig?: ModelConfig;
  towHitchOpted: boolean = false;
  yokeOpted: boolean = false;

  modelCodeValue: BehaviorSubject<string> = new BehaviorSubject("");
  modelConfigValue: BehaviorSubject<string> = new BehaviorSubject("");

  readonly towHitchPrice: number = 1000;
  readonly yokePrice: number = 1000;

  getModel(): Observable<CarModel[]> {
    return this.http.get<CarModel[]>('/models');
  }

  getConfig(): Observable<ModelCofigList> {
    return this.http.get<ModelCofigList>('/options/'+this.selectedModel?.code);
  }

  get isConfigSelected(): boolean {
    return this.selectedModelConfig? true : false;
  }

  updateModel(model:string) {
    this.modelCodeValue.next(model);
  }

  updateModelConfig(config:string) {
    this.modelConfigValue.next(config);
  }
}
