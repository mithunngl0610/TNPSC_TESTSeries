import { Component } from '@angular/core';

@Component({
  selector: 'quiz-root',
  template: `<div class='container'>
        <div class="appbody">
           <router-outlet></router-outlet>
        </div>
   
  </div>`,

})
export class QuizComponent {
 
}
