import { Component } from '@angular/core';
import {TestService} from "../../../services/test.service";

@Component({
  selector: 'app-questions-content',
  templateUrl: './questions-content.component.html',
  styleUrls: ['./questions-content.component.scss']
})
export class QuestionsContentComponent {
  public text = "Hellllooooo";

  constructor(private testService: TestService) {
  }

  getData() {
    this.testService.getData().subscribe((text: string) => this.text = text)
  }
}
