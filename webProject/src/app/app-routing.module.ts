import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';  
import { JobListingComponent } from './job-listing/job-listing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent} from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'signin', component: SignInComponent
  },
  {
    path:'contact', component: ContactComponent
  },
  {
    path:'about', component: AboutComponent
  },
  {
    path:'profile', component: ProfileComponent
  },
  {
    path:'listing',component: JobListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[HomeComponent,SignInComponent,ContactComponent,AboutComponent,JobListingComponent]
