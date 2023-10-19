import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {QuestionnaireRoutingModule} from "./questionnaire-routing.module";
import { QuestionsContentComponent } from './components/questions-content/questions-content.component';



@NgModule({
  declarations: [
    QuestionsContentComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    QuestionnaireRoutingModule
  ]
})
export class QuestionnaireModule { }
