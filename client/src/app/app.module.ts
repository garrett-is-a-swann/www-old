import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
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
import { FormComponent } from './form/form';
import { SidebarContent } from './sidebar-content/sidebar-content';
import { FooterComponent } from './footer/footer';

// Other's Components
import { PdfViewerModule } from 'ng2-pdf-viewer';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'links', component: HomeComponent },
    { path: 'resume', component: HomeComponent },
    { path: 'about-me', component: HomeComponent },
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
        FormComponent,
        SidebarContent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes
        ),
        FormsModule,


        PdfViewerModule
    ],
    providers: [Title],
    bootstrap: [AppComponent]
})
export class AppModule { }
