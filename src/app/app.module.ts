import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { Globals } from './globals'
import { ArktutoComponent } from './arktuto/arktuto.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SmileyComponent } from './smiley/smiley.component';
import { TeamComponent } from './team/team.component';
import { CompareDirective } from './compare-directive.directive';
import { ProfileComponent } from './profile/profile.component';
import { SignoutComponent } from './auth/signout.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    SmileyComponent,
    ArktutoComponent,
    TeamComponent,
    PageNotFoundComponent,
    CompareDirective,
    ProfileComponent,
    SignoutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    Globals, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
