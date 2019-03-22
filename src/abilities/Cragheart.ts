import Ability, { Initiative, Level } from 'abilities/Ability';
import CardIdentifier from 'cards/CardIdentifier';

export const abilities: Array<Ability> = [
  new Ability(CardIdentifier.official(116), Level.One, Initiative.of(46), 'Opposing Strike'),
  new Ability(CardIdentifier.official(117), Level.One, Initiative.of(35), 'Crushing Grasp'),
  new Ability(CardIdentifier.official(118), Level.One, Initiative.of(75), 'Avalanche'),
  new Ability(CardIdentifier.official(119), Level.One, Initiative.of(29), 'Rumbling Advance'),
  new Ability(CardIdentifier.official(120), Level.One, Initiative.of(87), 'Massive Boulder'),
  new Ability(CardIdentifier.official(121), Level.One, Initiative.of(77), 'Backup Ammunition'),
  new Ability(CardIdentifier.official(122), Level.One, Initiative.of(41), 'Rock Tunnel'),
  new Ability(CardIdentifier.official(123), Level.One, Initiative.of(13), 'Unstable Upheaval'),
  new Ability(CardIdentifier.official(124), Level.One, Initiative.of(61), 'Crater'),
  new Ability(CardIdentifier.official(125), Level.One, Initiative.of(82), 'Dirt Tornado'),
  new Ability(CardIdentifier.official(126), Level.One, Initiative.of(38), 'Earthen Clod'),
  new Ability(CardIdentifier.official(127), Level.X, Initiative.of(57), 'Heaving Swing'),
  new Ability(CardIdentifier.official(128), Level.X, Initiative.of(53), 'Forceful Storm'),
  new Ability(CardIdentifier.official(129), Level.X, Initiative.of(64), 'Nature\'s lift'),
  new Ability(CardIdentifier.official(130), Level.Two, Initiative.of(28), 'Explosive Punch'),
  new Ability(CardIdentifier.official(131), Level.Two, Initiative.of(78), 'Sentient Growth'),
  new Ability(CardIdentifier.official(132), Level.Three, Initiative.of(43), 'Clear the Way'),
  new Ability(CardIdentifier.official(133), Level.Three, Initiative.of(21), 'Blunt Force'),
  new Ability(CardIdentifier.official(134), Level.Four, Initiative.of(81), 'Rock Slide'),
  new Ability(CardIdentifier.official(135), Level.Four, Initiative.of(19), 'Kinetic Assault'),
  new Ability(CardIdentifier.official(136), Level.Five, Initiative.of(47), 'Petrify'),
  new Ability(CardIdentifier.official(137), Level.Five, Initiative.of(32), 'Stone Pummel'),
  new Ability(CardIdentifier.official(138), Level.Six, Initiative.of(78), 'Dig Pit'),
  new Ability(CardIdentifier.official(139), Level.Six, Initiative.of(26), 'Cataclysm'),
  new Ability(CardIdentifier.official(140), Level.Seven, Initiative.of(23), 'Meteor'),
  new Ability(CardIdentifier.official(141), Level.Seven, Initiative.of(52), 'Brutal Momentum'),
  new Ability(CardIdentifier.official(142), Level.Eight, Initiative.of(37), 'Rocky End'),
  new Ability(CardIdentifier.official(143), Level.Eight, Initiative.of(85), 'Lumbering Bash'),
  new Ability(CardIdentifier.official(144), Level.Nine, Initiative.of(74), 'Blind Destruction'),
  new Ability(CardIdentifier.official(145), Level.Nine, Initiative.of(31), 'Pulverize')
];

export const abilitiesForLevel = (level: Level): Array<Ability> => {
  return abilities.filter(it => it.level === level);
};