import { Component } from '@angular/core';
import { Users } from './Users/Users.modules';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Server02';

  user: Users = new Users()
  userlist: Users[] = []


ngClick(){
  this.userlist.push(this.user)
  this.user= new Users()
}




moveFocus(nextInput: HTMLInputElement) {
  nextInput.focus();
}
}














