import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ModelService } from '../model.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModelColor } from '../types/color.type';
import { CarModel } from '../types/model.type';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {

  models: CarModel[] = [];
  colors: ModelColor[] = [];

  constructor(private modelService: ModelService) { }
  ngOnInit(): void {
    this.modelService.getModel().subscribe(
      (data: CarModel[]) => {
        this.models = data;
        this.colors = this.filterColor(this.modelService.selectedModel?.code ?? '');
      }

    );
    this.modelForm.controls.modelSelect.setValue(this.modelService.selectedModel?.code ?? '');
    this.modelForm.controls.colorSelect.setValue(this.modelService.selectedModelColor?.code ?? '');

  }
  modelForm = new FormGroup({
    modelSelect: new FormControl(this.modelService.selectedModel?.code ?? ''),
    colorSelect: new FormControl(this.modelService.selectedModelColor?.code ?? ''),
  });

  private filterColor(value: string): ModelColor[] {
    const selectedModel = this.models.find(c => c.code === value);
    return selectedModel ? selectedModel?.colors : [];
  }

  onModelChange(): void {
    this.modelForm.controls.colorSelect.reset();
    const model = this.modelForm.get('modelSelect')?.value ?? ''
    this.colors = this.filterColor(model);
    this.modelService.selectedModel = this.models.find(c => c.code === model);
    this.modelForm.controls.colorSelect.setValue(this.colors[0].code);
    this.modelService.selectedModelColor = this.colors[0];
  }

  onColorChange(): void {
    this.modelService.selectedModelColor = this.colors.find(c => c.code === this.modelForm.get('colorSelect')?.value ?? '');
  }

  get model() {
    return this.modelService.selectedModel;
  }

  get color() {
    return this.modelService.selectedModelColor;
  }

  get showColorDropdown(): boolean {
    return this.modelService.selectedModel != undefined;
  }
}
