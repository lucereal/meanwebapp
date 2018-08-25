import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { ResumeService } from './services/resume.service';
import { ValidateService } from './services/validate.service';
import { AuthenticateService } from './services/authenticate.service';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {path: 'resume', component: ResumeComponent },
  {path: '', component:HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    SidebarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ResumeService,
    ValidateService,
    AuthenticateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
