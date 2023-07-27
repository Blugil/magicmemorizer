export interface gameState {
  name: boolean;
  body: boolean;
  correct_answer: string;
  options: string[];
}

export interface Question {
  name: boolean;
  body: boolean;
  answer: string;
  options: string[];
  artURL: string;
}
