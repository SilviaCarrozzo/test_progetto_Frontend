import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OauthComponent } from './features/oauth/oauth.component';
import { UnauthorizedComponent } from './features/unauthorized/unauthorized.component';
import { JwtOauthGuard } from './shared/jwt-oauth/jwt-oauth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/oauth', pathMatch: 'full' },
  {
    path: 'oauth',
    component: OauthComponent
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  },
  {
    path: 'list',
    loadChildren: () => import('./jewellery-list'),
    canActivate: [
      JwtOauthGuard
    ]
  },
  { path: '**', redirectTo: 'error' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
