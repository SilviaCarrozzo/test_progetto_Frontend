import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createTranslateLoader } from './app.module';
import { CoreModule } from './core/core.module';
import { UserService } from 'src/shared/service/user.service';
import { SharedModule } from 'src/shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { OAuthModule } from 'angular-oauth2-oidc';
//import { OAuthService } from 'angular-oauth2-oidc/oauth-service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgbModule,
        HttpClientModule,
        CoreModule.forRoot(),
        SharedModule.forRoot(),
        OAuthModule.forRoot(),
        MaterialModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
          }
        })
      ],
      declarations: [
        AppComponent,
      ],
      providers: [UserService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});