import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';



// Other's Components
//import { PdfViewerModule } from 'ng2-pdf-viewer';

// Import our Components
import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home';
//import { NavComponent } from './nav/navigation';
import { ErrorComponent } from './errorpage/errorpage';
//import { HeaderComponent } from './header/header';
//import { LoginComponent } from './login/login';
//import { FormComponent } from './form/form';
//import { SidebarContent } from './sidebar-content/sidebar-content';
import { BlogComponent } from './blog/blog.component';
import { GitCalendarComponent } from './git-calendar/git-calendar.component';
import { BlogService } from './blog/blog.service';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { PostComponent } from './blog/blog/post/post.component';
//import { FooterComponent } from './footer/footer';

const appRoutes: Routes = [
    { path: '', component: BlogComponent },
    //{ path: 'login', component: LoginComponent },
    { path: 'post/:id', component: BlogPostComponent },
    //{ path: 'links', component: HomeComponent },
    //{ path: 'resume', component: HomeComponent },
    //{ path: 'about-me', component: HomeComponent },
    { path: '**', component: ErrorComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        //HomeComponent,
        //NavComponent,
        ErrorComponent,
        //HeaderComponent,
        //LoginComponent,
        //FormComponent,
        //SidebarContent,
        BlogComponent,
        GitCalendarComponent,
        BlogPostComponent,
        PostComponent,

        //FooterComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes
        ),
        FormsModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatDividerModule,
        MatCardModule,


        //PdfViewerModule
    ],
    providers: [Title
        ,BlogService],
    bootstrap: [AppComponent]
})
export class AppModule { }
