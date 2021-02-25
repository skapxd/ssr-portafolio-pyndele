import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThankYouPageComponent } from './landing/thank-you-page/thank-you-page.component';
import { ValidarIdenaNegocioComponent } from './landing/validar-idena-negocio/validar-idena-negocio.component';

const routes: Routes = [
  {
    path: '',
    component: ValidarIdenaNegocioComponent
  },
  {
    path: 'thank-you',
    component: ThankYouPageComponent
  },
  {
    pathMatch: 'full',
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
