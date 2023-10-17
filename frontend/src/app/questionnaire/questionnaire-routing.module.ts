import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuestionsContentComponent} from "./components/questions-content/questions-content.component";

const routes: Routes = [
  {
    path: "",
    component: QuestionsContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class QuestionnaireRoutingModule { }
