import Character from '../Character';

test('Character', () => {
  const character = new Character('Ivan');
  const result = {
    name: 'Ivan', health: 100, level: 1,
  };
  expect(character).toEqual(result);
});
