import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JewelleryListComponent } from './jewels/jewellery-list/jewellery-list.component';

export const routes: Routes = [
  { path: 'vetrina', component: JewelleryListComponent }
 // { path: 'second-component', component: SecondComponent },
];

/*routes: Routes = [
  { path: '',
    redirectTo: '/jewels/jewellery-list',
    //loadChildren: () => import('.jewels/jewellery-list'),
    pathMatch: 'full' },
  {
    path: 'oauth',
  },
  {
    path: 'unauthorized',
  },
 /* {
    path: 'register',
    loadChildren: () => import('./jewels/register-client'),
    canActivate: [
    ]
  },
  { path: '**', redirectTo: 'error' }

];*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
