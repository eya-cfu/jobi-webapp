import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {JobOfferService} from '../api/job-offer.service';
import {JobOffer} from '../Models/job-offer'

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent implements OnInit {
  type: any;
  location: any;
  offersList: Observable<JobOffer[]>;
  filter: FormGroup;

  constructor(private formBuilder:FormBuilder, private jobOfferService: JobOfferService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.filter = this.formBuilder.group({
      category: '',
      type: '',
      location: '',
      experience:'',
      date:'',
      keyword:'',
    });
    this.onValueChanges()
    
    
      this.activatedRoute.queryParams.subscribe(params => {
      this.type= params['type'];
      this.location= params['location'];
      });
      this.jobOfferService.filterOffers(this.type, undefined, this.location, undefined).subscribe(data => this.offersList = data)
      
  }



  onValueChanges(): void {
    this.filter.valueChanges.subscribe(val=>{
      this.jobOfferService.filterOffers(val.type, val.category, val.location, val.languages).subscribe(data => this.offersList = data)
    })
  } 


}
