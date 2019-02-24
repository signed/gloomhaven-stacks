import { officialBattleGoals } from "battlegoals/battleGoals";
import { battleGoalByGlobalId, communityBattleGoals } from "battlegoals/battleGoals";

function battleGoalWithTwoRewards() {
  return communityBattleGoals[1];
}

function anyCommunityBattleGoal() {
  return communityBattleGoals[47];
}

function anyOfficialBattleGoal() {
  return officialBattleGoals[7];
}

describe('battle goals', () => {
  describe('official', () => {
    it('should be 24 available', () => {
      expect(officialBattleGoals).toHaveLength(24);
      expect(officialBattleGoals[officialBattleGoals.length - 1].globalCardId - officialBattleGoals[0].globalCardId).toEqual(23);
    });
  });
  describe('community', () => {
    it('should be available', () => {
      expect(communityBattleGoals).toHaveLength(64);
    });
    it('should properly detect one rewards', () => {
      expect(communityBattleGoals[0].reward).toBe(1);
    });
    it('parse name', () => {
      expect(communityBattleGoals[0].displayName).toEqual('Bully');
    });
    it('should properly detect two rewards', () => {
      expect(battleGoalWithTwoRewards().reward).toBe(2);
    });
    it('strip reward amount from text', () => {
      expect(battleGoalWithTwoRewards().text).not.toContain('(2 Checks)');
    });
  });

  describe('resolve battle goal by global id', () => {
    it('should resolve community battle goals by generated global id', () => {
      const battleGoal = anyCommunityBattleGoal();
      expect(battleGoalByGlobalId(battleGoal.globalCardId).globalCardId).toEqual(battleGoal.globalCardId)
    });
    it('should resolve official battle goals', () => {
      const battleGoal = anyOfficialBattleGoal();
      expect(battleGoalByGlobalId(battleGoal.globalCardId).globalCardId).toEqual(battleGoal.globalCardId);
    });
    it('should raise an error for unknown battle goals', () => {
      expect(() => battleGoalByGlobalId(-1)).toThrowError('There is no battle goal with globalId=-1')
    });
  });
});