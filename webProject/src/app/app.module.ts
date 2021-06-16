import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployeeNavbarComponent } from './employee-navbar/employee-navbar.component';
import { JobListingComponent } from './job-listing/job-listing.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { RegistrationComponent } from './registration/registration.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { FormsModule, NgForm, NgModel, NgModelGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentSignInComponent } from './student-sign-in/student-sign-in.component';
import { CompanySignInComponent } from './company-sign-in/company-sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    FooterComponent,
    SignInComponent,
    ContactComponent,
    AboutComponent,
    TestimonialComponent,
    ProfileComponent,
    EmployeeNavbarComponent,
    JobListingComponent,
    EmployeeRegistrationComponent,
    CompanyRegistrationComponent,
    RegistrationComponent,
    CompanyProfileComponent,
    StudentSignInComponent,
    CompanySignInComponent,
    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
