import Daemon from '../Daemon';

test('Daemon', () => {
  const daemon = new Daemon('Ivan');
  const result = {
    name: 'Ivan', level: 1, health: 100, _attack: 10, defence: 40, type: 'Daemon', _stoned: false,
  };
  expect(daemon).toEqual(result);
});
