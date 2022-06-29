import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

token: BehaviorSubject<string>;

  constructor() {
    this.token = new BehaviorSubject<string>('');
   }


//information in duration of identifiers
   signIn(user: string, password: string): Promise<void>{
    return new Promise<void>(
    (res, rej) => {


      //if the user is strictly equal to '' and password to ''. then a token is generated and opens the app
      if(user === 'Administrateur'&& password === 'azerty'){
        this.token.next('pefejnfrnec');
        res();//success
      }
      else{
        rej('Les identifiants sont incorrects')
      }
    }
  );
  }

  //disconnect function
  signOut(): Promise<void> {
    return new Promise<void>(
     (res, rej) => {
       this.token.next('');
       res();
     }
    );
  }
}
