import LifeExpect from '../../../week-5/planets/src/life.js';
import Convert from './convert.js';

describe('Convert', () => {

  let convert;
  beforeEach(() => {
    convert = new Convert(10, 3.5, 2.8);
  });

  test('check that convert function is outputing input * (currency-rate1 / currency-rate2) rounded to the nearest 2nd decimal', () => {
      expect(convert.fromAnything()).toEqual(12.5);
  })

})