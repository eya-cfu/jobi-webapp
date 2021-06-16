import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CompanyService } from '../services/company.service';
import { Company } from '../Models/company';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
export class CompanyRegistrationComponent implements OnInit {
  i=0;
  company:Company=null;
  constructor(private router:Router,private CompanyService:CompanyService ) { }

  ngOnInit(): void {
  }


  onSubmit( loginForm: NgForm){
    this.company=new Company(this.i,loginForm.value.username,loginForm.value.Address,loginForm.value.website,loginForm.value.tel,loginForm.value.email);
    this.i=this.i+1; 
    console.log(this.company);
      this.CompanyService.createCompany(this.company).subscribe(
      (data) => {
        alert("Vous êtes bien enregistré");
        this.router.navigate(['home']);
      },
      (erreur) => alert("Veuillez réessayer votre enregistrement")
    )
  }

}
