import { Routes } from '@angular/router';
import { FirstComponent} from './first/first.component' 
import { SecondComponent } from './second/second.component';
import { canActivateConfig, canActivateSummary } from './authguard.guard';
import { SummaryComponent } from './summary/summary.component';

export const routes: Routes = [
	{ path: 'model',component: FirstComponent},
	{ path: 'config',component: SecondComponent, canActivate: [canActivateConfig]},
	{ path: 'summary',component: SummaryComponent, canActivate: [canActivateSummary]},
	{ path:'', redirectTo: 'model', pathMatch: 'full'}
];
