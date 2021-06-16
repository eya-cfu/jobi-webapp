import { Component, OnInit } from '@angular/core';
import { Student } from '../Model/student';
import { StudentService } from '../services/student.service';
import { ActivatedRoute } from '@angular/router';
import { JobApplication } from '../model/jobApplication';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Student: Student={password:'k', linkedin:'i',location:'i' ,name: 'Mohsen', email:'asoas',tel:50666585,education:'',id:0,school:'INSAT',gender: "s", dateOfBirth: "2021-06-14", driverLicense: true,
  languages: 
    ['french']}
  
    JobApplications:JobApplication []=[
    {appId: 5, motivation: 'tayara', appDate: '50', studentId:0 , jobOfferId:0, status:'accepted'},
    {appId: 5, motivation: 'tayara', appDate: '50', studentId:0 , jobOfferId:0, status:'accepted'}
  ];
  
  pic='';

  fileName = '';

  constructor(private studentService: StudentService, private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
      this.ActivatedRoute.params.subscribe((params) => this.studentService.getApplicationsByStudentId(+params.id).subscribe(
      (JobApplications) => this.JobApplications=JobApplications)
      )
    ;

        this.ActivatedRoute.params.subscribe((params) => this.studentService.getStudentById(+params.id).subscribe(
      (Student) => this.Student=Student)
      )
    ;

     
      this.ActivatedRoute.params.subscribe((params) => this.studentService.getPicByStudentId(+params.id).subscribe(
      (pic) => this.pic=pic)
      )
    ;

  }
  ViewCV(){
     
      this.ActivatedRoute.params.subscribe((params) => this.studentService.getCvByStudentId(+params.id).subscribe(
      (CV) => {
      var fileURL = URL.createObjectURL(CV);
      window.open(fileURL);
      })
      )
    ;
  }


  onFileSelected(event) {

      const file:File = event.target.files[0];

      if (file) {

          this.fileName = file.name;

          const formData = new FormData();

          formData.append("pdf", file);

        this.ActivatedRoute.params.subscribe((params) => this.studentService.updateCV(formData,+params.id).subscribe((res) => {

          console.log(res);
  
          alert('Uploaded Successfully.');
  
        }))
  
      }
  }
  
}



