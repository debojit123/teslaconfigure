import { CanActivateFn, Router } from '@angular/router';
import { ModelService } from './model.service';
import { inject } from '@angular/core';

export const canActivateSummary: CanActivateFn = (route, state) => {

  const modelservice = inject(ModelService);
  const router = inject(Router);

   if((modelservice.selectedModel? true : false 
    && modelservice.selectedModelColor? true : false) 
    && modelservice.isConfigSelected) {
      return true;
  } else {
    router.navigate(['/config']);
    return false
  }

  }

  export const canActivateConfig: CanActivateFn = (route, state) => {

    const modelservice = inject(ModelService);
    const router = inject(Router);
  
    if(modelservice.selectedModel? true : false 
      && modelservice.selectedModelColor? true : false) {
        return true;
    } else {
      router.navigate(['/model']);
      return false
    }
  
    }
  
