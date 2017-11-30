import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Import our Components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/navigation';
import { HomeComponent } from './home/home';
import { ErrorComponent } from './errorpage/errorpage';
import { HeaderComponent } from './header/header';
import { LoginComponent } from './login/login';
import { LoginFormComponent } from './login/login-form/login-form';
import { SidebarContent } from './sidebar-content/sidebar-content';
import { FooterComponent } from './footer/footer';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: ErrorComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavComponent,
        ErrorComponent,
        HeaderComponent,
        LoginComponent,
        LoginFormComponent,
        SidebarContent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes
        ),
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
