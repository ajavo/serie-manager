import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
//login page
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isConnected!: boolean;
  tokenSub!: Subscription;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

//token for connection

    this.tokenSub = this.authService.token
    .subscribe((newTokenValue: string) =>{
      this.isConnected = !!newTokenValue;
    });

  }
  //click function access to navigation

onClickSignOut(): void{
  this.authService
  .signOut()
  .then(() => {
    this.router.navigateByUrl('');
  })
}
//connection token submission function
  ngOnDestroy(): void{
    this.tokenSub.unsubscribe();
  }
}
