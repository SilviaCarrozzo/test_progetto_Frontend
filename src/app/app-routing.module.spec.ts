import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { OAuthModule } from 'angular-oauth2-oidc';
import { OAuthService } from 'angular-oauth2-oidc/oauth-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createTranslateLoader } from './app.module';
import { CoreModule } from './core/core.module';
import { OauthComponent } from './features/oauth/oauth.component';
import { UnauthorizedComponent } from './features/unauthorized/unauthorized.component';
import { MaterialModule } from './shared/material.module';
import { DataReportService } from './shared/service/data-report.service';
//import { UserService } from './shared/service/user.service';
import { SharedModule } from '';
import { WidgetModule } from './widget/widget.module';

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
        WidgetModule,
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
        OauthComponent,
        UnauthorizedComponent
      ],
      providers: [DataReportService, UserService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should get data report and user info', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    expect(app.dataReport).toBe(null);
    expect(app.user).toBe(null);
  });
});