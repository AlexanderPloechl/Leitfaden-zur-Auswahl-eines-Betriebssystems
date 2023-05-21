export class Question {
    Id: number;
    Text?: string;
    PossibleAnswers?: any;
    Points: number;

    constructor(id?: number, text?: string, possibleAnswers?: any, points?: number) {
        if (id !== undefined && text !== undefined && possibleAnswers !== undefined && points !== undefined) {
            this.Id = id;
            this.Text = text;
            this.PossibleAnswers = possibleAnswers;
            this.Points = points;
        } else {
            this.Id = -1;
            this.Points = 0;
        }
    }
}
