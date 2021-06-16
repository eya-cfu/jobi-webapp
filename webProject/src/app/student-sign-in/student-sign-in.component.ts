import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';


@Component({
  selector: 'app-student-sign-in',
  templateUrl: './student-sign-in.component.html',
  styleUrls: ['./student-sign-in.component.css']
})
export class StudentSignInComponent implements OnInit {

  constructor(private router: Router,private authService:AuthServiceService) { }

  ngOnInit(): void {
  }

  onSubmit( loginForm: NgForm){

    this.authService.login(loginForm.value).subscribe(
      (data) => {
        localStorage.setItem('token', data['id']);
        this.router.navigate(['profile']);
      },

      (erreur) => alert("Veuillez vérifier vos coordonnées")
    )
  }

}
