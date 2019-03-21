import Ability, { Level } from 'abilities/Ability';
import CardIdentifier from 'cards/CardIdentifier';

export const abilities: Array<Ability> = [
  new Ability(CardIdentifier.official(116), Level.One, 'Opposing Strike'),
  new Ability(CardIdentifier.official(117), Level.One, 'Crushing Grasp'),
  new Ability(CardIdentifier.official(118), Level.One, 'Avalanche'),
  new Ability(CardIdentifier.official(119), Level.One, 'Rumbling Advance'),
  new Ability(CardIdentifier.official(120), Level.One, 'Massive Boulder'),
  new Ability(CardIdentifier.official(121), Level.One, 'Backup Ammunition'),
  new Ability(CardIdentifier.official(122), Level.One, 'Rock Tunnel'),
  new Ability(CardIdentifier.official(123), Level.One, 'Unstable Upheaval'),
  new Ability(CardIdentifier.official(124), Level.One, 'Crater'),
  new Ability(CardIdentifier.official(125), Level.One, 'Dirt Tornado'),
  new Ability(CardIdentifier.official(126), Level.One, 'Earthen Clod'),
  new Ability(CardIdentifier.official(127), Level.X, 'Heaving Swing'),
  new Ability(CardIdentifier.official(128), Level.X, 'Forceful Storm'),
  new Ability(CardIdentifier.official(129), Level.X, 'Nature\'s lift'),
  new Ability(CardIdentifier.official(130), Level.Two, 'Explosive Punch'),
  new Ability(CardIdentifier.official(131), Level.Two, 'Sentient Growth'),
  new Ability(CardIdentifier.official(132), Level.Three, 'Clear the Way'),
  new Ability(CardIdentifier.official(133), Level.Three, 'Blunt Force'),
  new Ability(CardIdentifier.official(134), Level.Four, 'Rock Slide'),
  new Ability(CardIdentifier.official(135), Level.Four, 'Kinetic Assault'),
  new Ability(CardIdentifier.official(136), Level.Five, 'Petrify'),
  new Ability(CardIdentifier.official(137), Level.Five, 'Stone Pummel'),
  new Ability(CardIdentifier.official(138), Level.Six, 'Dig Pit'),
  new Ability(CardIdentifier.official(139), Level.Six, 'Cataclysm'),
  new Ability(CardIdentifier.official(140), Level.Seven, 'Meteor'),
  new Ability(CardIdentifier.official(141), Level.Seven, 'Brutal Momentum'),
  new Ability(CardIdentifier.official(142), Level.Eight, 'Rocky End'),
  new Ability(CardIdentifier.official(143), Level.Eight, 'Lumbering Bash'),
  new Ability(CardIdentifier.official(144), Level.Nine, 'Blind Destruction'),
  new Ability(CardIdentifier.official(145), Level.Nine, 'Pulverize')
];

export const abilitiesForLevel = (level: Level): Array<Ability> => {
  return abilities.filter(it => it.level === level);
};