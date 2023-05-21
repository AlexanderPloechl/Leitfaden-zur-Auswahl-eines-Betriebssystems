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
  User: User = new User();
  Questions: any;
  CurrentQuestion: Question = new Question();
  selectedAnswer: string = "";
  finished: boolean = false;
  Result: string = "";

  constructor(private jsonService: JsonService) { }
  ngOnInit(): void {
    this.jsonService.getJsonData().subscribe(data => {
      this.Questions = data;

      this.CurrentQuestion.Id = 0;
      this.CurrentQuestion.Text = this.Questions[this.CurrentQuestion.Id].text;
      this.CurrentQuestion.PossibleAnswers = this.Questions[this.CurrentQuestion.Id].possible_answers;
      this.CurrentQuestion.Points = this.Questions[this.CurrentQuestion.Id].points;
    });
  }

  //reccomendatioin ausgeben
  //design

  GoToNextQuestion(): void {
    this.ProcessAnswer(this.selectedAnswer, this.CurrentQuestion);

    this.CurrentQuestion = this.ChooseNextQuestion(this.selectedAnswer, this.CurrentQuestion)
    this.selectedAnswer = "";
  }

  ChooseNextQuestion(answer: string, question: Question): Question {
    let nextQuestion: Question = new Question();

    switch (question.Id) {
      case 0:
        nextQuestion = this.FillNextQuestion(1);
        break;
      case 1:
        if (answer == question.PossibleAnswers[0]) {
          nextQuestion = this.FillNextQuestion(11);
        }
        else {
          nextQuestion = this.FillNextQuestion(8);
        }
        break;
      case 2:
        nextQuestion = this.FillNextQuestion(19);
        break;
      case 3:
        if (answer == question.PossibleAnswers[0]) {
          nextQuestion = this.FillNextQuestion(7);
        }
        else {
          nextQuestion = this.FillNextQuestion(12);
        }
        break;
      case 4:
        if (answer == question.PossibleAnswers[0]) {
          nextQuestion = this.FillNextQuestion(6);
        }
        else {
          nextQuestion = this.FillNextQuestion(3);
        }
        break;
      case 5:
        if (answer == question.PossibleAnswers[0]) {
          nextQuestion = this.FillNextQuestion(5);
        }
        else {
          nextQuestion = this.FillNextQuestion(4);
        }
        break;
      case 6:
        nextQuestion = this.FillNextQuestion(12);
        break;
      case 7:
        nextQuestion = this.FillNextQuestion(12);
        break;
      case 8:
        if (answer == question.PossibleAnswers[0]) {
          nextQuestion = this.FillNextQuestion(12);
        }
        else {
          nextQuestion = this.FillNextQuestion(12);
        }
        break;
      case 9:
        nextQuestion = this.FillNextQuestion(12);
        break;
      case 10:
        nextQuestion = this.FillNextQuestion(12);
        break;
      case 11:
        if (answer == question.PossibleAnswers[0]) {
          nextQuestion = this.FillNextQuestion(8);
        }
        else {
          nextQuestion = this.FillNextQuestion(5);
        }
        break;
      case 12:
        nextQuestion = this.FillNextQuestion(13);
        break;
      case 13:
        if (answer == question.PossibleAnswers[0]) {
          nextQuestion = this.FillNextQuestion(14);
        }
        else {
          nextQuestion = this.FillNextQuestion(15);
        }
        break;
      case 14:
        nextQuestion = this.FillNextQuestion(15);
        break;
      case 15:
        nextQuestion = this.FillNextQuestion(16);
        break;
      case 16:
        nextQuestion = this.FillNextQuestion(17);
        break;
      case 17:
        nextQuestion = this.FillNextQuestion(18);
        break;
      case 18:
        nextQuestion = this.FillNextQuestion(2);
        break;
      case 19:
        if (answer == question.PossibleAnswers[0]) {
          nextQuestion = this.FillNextQuestion(19);
        }
        else {
          nextQuestion = this.FillNextQuestion(25);
        }
        break;
      case 20:
        nextQuestion = this.FillNextQuestion(21);
        break;
      case 21:
        nextQuestion = this.FillNextQuestion(22);
        break;
      case 22:
        nextQuestion = this.FillNextQuestion(23);
        break;
      case 23:
        nextQuestion = this.FillNextQuestion(24);
        break;
      case 24:
        nextQuestion = this.FillNextQuestion(25);
        break;
      case 25:
        nextQuestion = this.FillNextQuestion(26);
        break;
      case 26:
        if (answer == question.PossibleAnswers[0]) {
          nextQuestion = this.FillNextQuestion(29);
        }
        else {
          nextQuestion = this.FillNextQuestion(27);
        }
        break;
      case 27:
        if (answer == question.PossibleAnswers[0]) {
          nextQuestion = this.FillNextQuestion(34);
        }
        else {
          nextQuestion = this.FillNextQuestion(28);
        }
        break;
      case 28:
        if (answer == question.PossibleAnswers[0]) {
          nextQuestion = this.FillNextQuestion(39);
        }
        else {
          nextQuestion = this.FillNextQuestion(40);
        }
        break;
      case 29:
        nextQuestion = this.FillNextQuestion(30);
        break;
      case 30:
        nextQuestion = this.FillNextQuestion(31);
        break;
      case 31:
        nextQuestion = this.FillNextQuestion(32);
        break;
      case 32:
        nextQuestion = this.FillNextQuestion(33);
        break;
      case 33:
        nextQuestion = this.FillNextQuestion(27);
        break;
      case 34:
        nextQuestion = this.FillNextQuestion(35);
        break;
      case 35:
        nextQuestion = this.FillNextQuestion(36);
        break;
      case 36:
        nextQuestion = this.FillNextQuestion(37);
        break;
      case 37:
        nextQuestion = this.FillNextQuestion(38);
        break;
      case 38:
        nextQuestion = this.FillNextQuestion(28);
        break;
      case 39:
        nextQuestion = this.FillNextQuestion(40);
        break;
      case 40:
        this.finished = true;
        this.PrintResult();
        break;
    }
    return nextQuestion;
  }

  FillNextQuestion(id: number): Question {
    return new Question(id, this.Questions[this.Questions[id].id].text, this.Questions[this.Questions[id].id].possible_answers, this.Questions[this.Questions[id].id].points);
  }
  ProcessAnswer(answer: string, question: Question): void {
    switch (question.Id) {
      case 0:
        break;
      case 1:
        break;
      case 2:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, -question.Points, -question.Points, -question.Points, -question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(-question.Points, question.Points, -question.Points, -question.Points, -question.Points)
        }
        if (answer == question.PossibleAnswers[2]) {
          this.User.AddPoints(-question.Points, -question.Points, question.Points, -question.Points, -question.Points)
        }
        if (answer == question.PossibleAnswers[3]) {
          this.User.AddPoints(-question.Points, -question.Points, -question.Points, question.Points, -question.Points)
        }
        if (answer == question.PossibleAnswers[4]) {
          this.User.AddPoints(-question.Points, -question.Points, -question.Points, -question.Points, question.Points)
        }
        break;
      case 3:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(-question.Points, -question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 4:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(-question.Points, question.Points, question.Points, -question.Points, -question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, -question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 5:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(-question.Points, -question.Points, question.Points, -question.Points, -question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 6:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(0, question.Points, question.Points, 0, 0)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(0, question.Points, 0, 0, 0)
        }
        break;
      case 7:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(0, 0, question.Points, 0, 0)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(0, 0, question.Points, question.Points, question.Points)
        }
        break;
      case 8:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 9:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, -question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, -question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 10:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, -question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, -question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 11:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 12:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 13:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 14:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, -question.Points, -question.Points, -question.Points, -question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 15:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 16:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, -question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 17:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, -question.Points, -question.Points, -question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 18:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, -question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 19:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 20:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(-question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 21:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, -question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 22:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, -question.Points, question.Points, question.Points)
        }
        break;
      case 23:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, -question.Points, question.Points)
        }
        break;
      case 24:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, -question.Points)
        }
        break;
      case 25:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, -question.Points, -question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[2]) {
          this.User.AddPoints(question.Points, question.Points, -question.Points, question.Points, question.Points)
        }
        break;
      case 26:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 27:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 28:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 29:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(-question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 30:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, -question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 31:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, -question.Points, question.Points, question.Points)
        }
        break;
      case 32:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, -question.Points, question.Points)
        }
        break;
      case 33:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, -question.Points)
        }
        break;
      case 34:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(-question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 35:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, -question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 36:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, -question.Points, question.Points, question.Points)
        }
        break;
      case 37:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, -question.Points, question.Points)
        }
        break;
      case 38:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, -question.Points)
        }
        break;
      case 39:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(question.Points, -question.Points, -question.Points, -question.Points, -question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(-question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        break;
      case 40:
        if (answer == question.PossibleAnswers[0]) {
          this.User.AddPoints(-question.Points, 0, 0, -question.Points, question.Points)
        }
        if (answer == question.PossibleAnswers[1]) {
          this.User.AddPoints(question.Points, question.Points, question.Points, question.Points, question.Points)
        }
        break;
    }
  }

  PrintResult() {
    let values: any[] = [
      [this.User.WindowsScore, "Windows"],
      [this.User.MacOSScore, "MacOS"],
      [this.User.ChromeOSScore, "ChromeOS"],
      [this.User.UbuntuScore, "Ubuntu"],
      [this.User.MintScore, "Linux Mint"]];
    values = this.BubbleSort(values);
    this.Result = "Das Betriebssystem, dass ihrem Anwendungsfall am meisten entspricht ist:\n\n" + values[0][1]
      + " mit einer Punktzahl von " + values[0][0]
      + "!\n\nDie anderen Betriebssysteme erreichten folgende Punktzahlen:\n"
      + values[1][1] + ": " + values[1][0] + "Punkte,\n"
      + values[2][1] + ": " + values[2][0] + "Punkte,\n"
      + values[3][1] + ": " + values[3][0] + "Punkte,\n"
      + values[4][1] + ": " + values[4][0] + "Punkte.";
  }

  BubbleSort(elements: any[]): any[] {
    const numberOfElements = elements.length;

    for (let i = 0; i < numberOfElements - 1; i++) {
      for (let k = 0; k < numberOfElements - i - 1; k++) {
        if (elements[k][0] < elements[k + 1][0]) {
          const temp = elements[k];
          elements[k] = elements[k + 1];
          elements[k + 1] = temp;
        }
      }
    }

    return elements;
  }

  Restart() {
    this.User = new User();
    this.CurrentQuestion = new Question();
    this.selectedAnswer = "";
    this.finished = false;
    this.CurrentQuestion.Id = 0;
    this.CurrentQuestion.Text = this.Questions[this.CurrentQuestion.Id].text;
    this.CurrentQuestion.PossibleAnswers = this.Questions[this.CurrentQuestion.Id].possible_answers;
    this.CurrentQuestion.Points = this.Questions[this.CurrentQuestion.Id].points;
  }
}
