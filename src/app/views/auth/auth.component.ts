import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user!: string;
  password!:string;

  errMsg!: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.user ='Administrateur'
    this.password = 'azerty';
  }
  onSubmitAuthForm(): void {

    this.errMsg ='';

    this.authService
    .signIn(this.user, this.password)
    .then(() => {


      //redirect the user to the series view
          this.router.navigateByUrl('/series');
    })
    .catch((errMsg) => {
      this.errMsg = errMsg;
    });

  }
}
