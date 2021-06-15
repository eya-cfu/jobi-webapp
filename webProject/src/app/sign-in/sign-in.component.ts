import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

 /*onSubmit( loginForm: NgForm){
    this.authService.login(loginForm.value).subscribe(
      (data) => {
        localStorage.setItem('token', data['id']);
        this.router.navigate(['profile']);
      },
      (erreur) => alert("Veuillez vérifier vos coordonnées")
    )
  }*/ 

}
