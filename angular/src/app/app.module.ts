import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

// ROUTES !!!
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
const appRoutes: Routes = [
    { 
        path: 'contact', 
        component: ContactComponent 
    },
    { 
        path: 'user/:name', 
        component: UserComponent },
    {
        path: 'home',
        component: HomeComponent
    },
    { 
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    { 
        path: '**', 
        component: PageNotFoundComponent 
    }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    UserComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes, { enableTracing: true }) // <-- 'enableTracing' is for debugging purposes only !!!
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
