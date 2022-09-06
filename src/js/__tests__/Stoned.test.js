import Stoned from '../Stoned';
import Daemon from '../Daemon';
import Magician from '../Magician';

test('Stoned', () => {
  const stoned = new Stoned('Ivan');
  const result = {
    name: 'Ivan', level: 1, health: 100, _stoned: false,
  };
  expect(stoned).toEqual(result);
});

test('Magician атакует вторую клетку без дурмана', () => {
  const magician = new Magician('Ivan');
  magician.stoned = false;
  magician.distance = 2;
  const result = magician.attack;
  expect(result).toBe(9);
});

test('Magician атакует вторую клетку с дурманом', () => {
  const magician = new Magician('Ivan');
  magician.stoned = true;
  magician.distance = 2;
  const result = magician.attack;
  expect(result).toBe(4);
});

test('Daemon атакует шестую клетку без дурмана', () => {
  const daemon = new Daemon('Ivan');
  daemon.stoned = false;
  daemon.distance = 6;
  const result = daemon.attack;
  expect(result).toBe(0);
});
