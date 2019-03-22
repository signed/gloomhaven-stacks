import CardIdentifier from 'cards/CardIdentifier';
import { replaceAll } from 'lang/strings';

export enum Element {
  Fire = 'Fire',
  Ice = 'Ice',
  Air = 'Air',
  Earth = 'Earth',
  Light = 'Light',
  Dark = 'Dark'
}

export class TopAction {

}

export class BottomAction {

}

export class Initiative {

}

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

export const scanUrlFor = (ability: Ability): string => {
  const cardNumber = ability.cardIdentifier.cardNumber;
  if (116 <= cardNumber && cardNumber <= 145) {
    const character = 'CH';
    const withoutHyphens = replaceAll(ability.title, '\'', '');
    const withoutSpaces = replaceAll(withoutHyphens, ' ', '-');
    const title = withoutSpaces.toLowerCase();
    return `https://raw.githubusercontent.com/any2cards/gloomhaven/master/images/character-ability-cards/${character}/${title}.png`;
  }
  throw new Error();
};

export default class Ability {
  constructor(readonly cardIdentifier: CardIdentifier,
              readonly level: Level,
              readonly title: string) {
  }
}