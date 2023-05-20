import { Component, OnInit } from '@angular/core';
import { JsonService } from './json-service.service';
import { User } from './User';
import { Question } from './Question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  Questions: any;
  CurrentQuestion: Question = new Question();
  NextQuestion: Question = new Question();
  QuestionId: number = 0;
  selectedAnswer: string = "";

  constructor(private jsonService: JsonService) { }
  ngOnInit(): void {
    this.jsonService.getJsonData().subscribe(data => {
      this.Questions = data;

      this.CurrentQuestion.Id = this.Questions[this.QuestionId].id;
      this.CurrentQuestion.Text = this.Questions[this.QuestionId].text;
      this.CurrentQuestion.PossibleAnswers = this.Questions[this.QuestionId].possible_answers;
    });
  }

  GoToNextQuestion() {
    console.log(this.selectedAnswer);
    this.selectedAnswer = "";
    this.QuestionId++;
    if (this.Questions.length > this.QuestionId) {
      this.NextQuestion.Id = this.Questions[this.QuestionId].id;
      this.NextQuestion.Text = this.Questions[this.QuestionId].text;
      this.NextQuestion.PossibleAnswers = this.Questions[this.QuestionId].possible_answers;
      this.CurrentQuestion = this.NextQuestion;
    }
  }
}
