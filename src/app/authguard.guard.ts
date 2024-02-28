import { CanActivateFn, Router } from '@angular/router';
import { ModelService } from './model.service';
import { inject } from '@angular/core';

export const canActivateSummary: CanActivateFn = (route, state) => {

  const modelservice = inject(ModelService);

  return ((modelservice.selectedModel? true : false && modelservice.selectedModelColor? true : false) && modelservice.isConfigSelected);

  }

  export const canActivateConfig: CanActivateFn = (route, state) => {

    const modelservice = inject(ModelService);
  
    return modelservice.selectedModel? true : false && modelservice.selectedModelColor? true : false;
  
    }
  
