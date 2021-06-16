import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {CompanyService} from '../api/company.service';
import { Company } from '../model/company';
@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  company : Company;
  company_id: number;
  constructor(private companyService: CompanyService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.company_id= params['id'];
    });
     this.companyService.getCompanyById(this.company_id).subscribe(data => {this.company =data});
  }


  

}
