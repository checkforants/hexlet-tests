import reverse from '../src/index';
// let reverse = require('../src/index')
test('reverse string', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('1')).toEqual('');
});