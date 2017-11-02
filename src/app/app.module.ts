import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// Import our Components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/navigation';
import { HomeComponent } from './home/home';
import { ErrorComponent } from './errorpage/errorpage';
import { HeaderComponent } from './header/header';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', component: ErrorComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavComponent,
        ErrorComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
