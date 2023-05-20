export class Question {
    Id?: number;
    Text?: string;
    PossibleAnswers?: any;
    constructor() {
        this.Id = undefined;
        this.Text = undefined;
        this.PossibleAnswers = undefined;
    }
}