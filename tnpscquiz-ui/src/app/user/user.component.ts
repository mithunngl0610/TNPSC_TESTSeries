import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: `./user.component.html`,

})
export class UserComponent {
 
constructor(private router:Router){

}
    redirect(){
        this.router.navigate(["/home"]);
    }
}
