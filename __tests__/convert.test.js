import LifeExpect from '../../../week-5/planets/src/life.js';
import Convert from './convert.js';

describe('Convert', () => {

  let convert;
  beforeEach(() => {
    convert = new Convert();
  });

  test('check the output of Convert()', () => {
    expect(convert).toEqual(0);
  })

})