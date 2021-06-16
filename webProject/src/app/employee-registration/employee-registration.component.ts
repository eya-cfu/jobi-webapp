import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Student } from '../Models/student';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  file:any=null;
  constructor(private router:Router, private StudentService:StudentService) { }
  selectedFile: ImageSnippet;

  fileName = '';
  fileCV:any=null;
  i=0;
  student:Student=null;


  ngOnInit(): void {
  }

  processFile(imageInput: any) {
    this.file = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, this.file);
    });
      reader.readAsDataURL(this.file);
    
      }


      onFileSelected(event) {

        this.fileCV = event.target.files[0];
  
        if (this.fileCV) {
  
            this.fileName = this.fileCV.name;
  
            const formData = new FormData();
  
            formData.append("pdf", this.fileCV);
  
        }
    }


    onSubmit( loginForm: NgForm){
      this.student=new Student(this.i,loginForm.value.username,loginForm.value.email,loginForm.value.password,loginForm.value.tel,loginForm.value.gender,loginForm.value.Birthdate,false,'','','','','');
      this.i=this.i+1; 
      console.log(this.student);
      this.StudentService.createStudentForm(this.student,this.fileCV,this.file).subscribe(
        (data) => {
          alert("Vous êtes bien enregistré");
          this.router.navigate(['home']);
        },
        (erreur) => alert("Veuillez réessayer votre enregistrement")
      )
    }


}


