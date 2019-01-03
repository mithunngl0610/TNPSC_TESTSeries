import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { QuizRoutingModule } from './app-routing.module';
import { QuizComponent } from './quiz.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    QuizComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    QuizRoutingModule
  ],
  providers: [],
  bootstrap: [QuizComponent]
})
export class QuizModule { }
