import { Injectable } from '@angular/core';
import {Mood, QaModel} from '../model/qa.model';

@Injectable({
  providedIn: 'root'
})
export class QaService {

  constructor() { }

  getQA(): QaModel[] {
    // should be more reactive in the future
    return [
      new QaModel(
        'How old are you?',
        'Well.. I\'m not exactly adolescent. I\'m in my very early 40\'s.',
        Mood.BAD),
      new QaModel(
        'Do you like to eat?',
        'Yes. But not too excessively.',
        Mood.GOOD),
      new QaModel(
        'Do you have a family?',
        'Yes. Two (not so) little fellows. We are good friends!',
        Mood.EXCELLENT),
      new QaModel(
        'And any hobbies besides gazing at your laptop?',
        'I ride two-wheelers and I stay close to nature.',
        Mood.EXCELLENT),
      new QaModel(
        'How do you look like?',
        'I hope that I look normally.',
        Mood.GOOD),
      new QaModel(
        'Can you speak your native language well?',
        'Yes, I can!',
        Mood.GOOD),
      new QaModel(
        'Are you nervous?',
        'Not at all.',
        Mood.GOOD),
      new QaModel(
        'Are you healthy?',
        'There are no healthy people. There are people that are not examined thoroughly.',
        Mood.GOOD),
      new QaModel(
        'Do you love animals?',
        'I respect life. I really do. People who do not feel the same might have deficiencies.',
        Mood.BAD),
      new QaModel(
        'What do you think about humour?',
        'There are no strong reasons to continue without it.',
        Mood.EXCELLENT),
      new QaModel(
        'Boys or girls?',
        'Girls.',
        Mood.EXCELLENT),
      new QaModel(
        'What is your blood type?',
        'A Rh+ if you ever need that. And if you are in a real trouble - I might donate some blood for you. Seriously.',
        Mood.EXCELLENT),
      new QaModel(
        'Tell some of the things that you would do if you were very rich?',
        'I would ride two-wheelers and stay close to nature.',
        Mood.EXCELLENT),
      new QaModel(
        'Which do you think is the best car?',
        'The one that drives you from A to B.',
        Mood.GOOD),
      new QaModel(
        'Tabs or spaces?',
        'No comment.',
        Mood.GOOD)
    ];
  }
}
