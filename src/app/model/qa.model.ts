export class QaModel {

  constructor(public question: string, public answer: string, public mood: Mood) {}
}

export enum Mood {
  BAD = 'BAD',
  GOOD = 'GOOD',
  EXCELLENT = 'EXCELLENT'
}
