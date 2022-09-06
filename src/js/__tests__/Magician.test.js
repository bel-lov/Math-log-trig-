import Magician from '../Magician';

test('Magician', () => {
  const magician = new Magician('Ivan');
  const result = {
    name: 'Ivan', level: 1, health: 100, _attack: 10, defence: 40, type: 'Magician', _stoned: false,
  };
  expect(magician).toEqual(result);
});
