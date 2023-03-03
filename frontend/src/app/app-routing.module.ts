import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {path: '', component: InicioComponent, pathMatch: 'full'},
  // {
	// 	path: '',
	// 	loadChildren: () =>
	// 		import('./pages/inicio/inicio.module').then((m) => m.InicioModule)
	// },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
