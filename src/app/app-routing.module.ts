import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/jewels/jewellery-list', pathMatch: 'full' },
  {
    path: 'oauth',
  },
  {
    path: 'unauthorized',
  },
  {
    path: 'register',
    loadChildren: () => import('./jewels/register-client'),
    canActivate: [
    ]
  },
  { path: '**', redirectTo: 'error' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
