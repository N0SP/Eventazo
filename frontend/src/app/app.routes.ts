import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NewsComponent } from './views/news/news.component';
import { ContactComponent } from './views/contact/contact.component';
import { EditprofileComponent } from './views/editprofile/editprofile.component';
import { EventdetailComponent } from './views/eventdetail/eventdetail.component';
import { EventsComponent } from './views/events/events.component';
import { FaqComponent } from './views/faq/faq.component';
import { HistoryComponent } from './views/history/history.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { UsersComponent } from './views/users/users.component';
import { MessagesComponent } from './views/messages/messages.component';
import { BuyComponent } from './views/buy/buy.component';

import { Step1Component } from './views/steps/step1/step1.component';
import { Step2Component } from './views/steps/step2/step2.component';
import { Step3Component } from './views/steps/step3/step3.component';
import { Step4Component } from './views/steps/step4/step4.component';

// Promotor routes
import { PromotorComponent } from './views/promotor/promotor.component';
import { NeweventComponent } from './views/promotor/newevent/newevent.component';
import { PromoDashComponent } from './views/promotor/dashboard/promo-dash.component';

import { authGuard, authGuard2 } from './guards/auth.guard';
import { MessageComponent } from './views/message/message.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [authGuard] },
    { path: 'buy/:id', component: BuyComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'editprofile/:id', component: EditprofileComponent },
    { path: 'event/:id', component: EventdetailComponent },
    { path: 'events', component: EventsComponent, canActivate: [authGuard2] },
    { path: 'faq', component: FaqComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'message/:id', component: MessageComponent},
    { path: 'messages', component: MessagesComponent },
    { path: 'news', component: NewsComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'users', component: UsersComponent },

    { path: 'step1', component: Step1Component },
    { path: 'step2', component: Step2Component },
    { path: 'step3', component: Step3Component },
    { path: 'step4', component: Step4Component },

    // Promotor Rutas
    { path: 'promotor', component: PromotorComponent },
    { path: 'promotor/newevent', component: NeweventComponent },
    { path: 'promotor/newevent/:step', component: NeweventComponent },
    { path: 'promotor/dashboard', component: PromoDashComponent },

    { path: '**', redirectTo: '', pathMatch: 'full' }
];