import { replaceAll } from 'lang/strings';

describe('strings', () => {
  describe('replaceAll', () => {
    it('should replace all occurences', () => {
      expect(replaceAll('a b c d', ' ', '')).toEqual('abcd');
    });
  });
});