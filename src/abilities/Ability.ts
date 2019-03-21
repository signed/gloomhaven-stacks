import CardIdentifier from 'cards/CardIdentifier';

export enum Level {
  One = '1',
  Two = '2',
  Three = '3',
  Four = '4',
  Five = '5',
  Six = '6',
  Seven = '7',
  Eight = '8',
  Nine = '9',
  X = 'X'
}

export default class Ability {
  constructor(readonly cardIdentifier: CardIdentifier,
              readonly level: Level,
              readonly title: string) {
  }
}