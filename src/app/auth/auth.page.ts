import { Component, OnInit } from '@angular/core';
import { Auth } from './auth';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: false
})
export class AuthPage implements OnInit {
  isLoading = false;
  isLoginMode = true;
   constructor(private authService: Auth, private router: Router
    ,private loadingCtrl: LoadingController
   ) {}

  ngOnInit() {}

  onLogin() {
    this.authService.login();
    this.isLoading = true;

    this.loadingCtrl.create({
      keyboardClose: true,
      message: 'Logging in...',
      spinner: 'crescent'
    }).then(loadingEl => {
      loadingEl.present();
       setTimeout(() => {
       this.isLoading = false;
       loadingEl.dismiss();
       this.router.navigateByUrl('/places/discover');

    }, 1500);
    });
    // Simulate a delay for login
  }


   
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    console.log('Email:', email);
    console.log('Password:', password);

    if (this.isLoginMode) {
      // Handle login logic
    } else {
      // Handle signup logic
    }
  }

  onSwitchAuthMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
