import Stoned from './Stoned';

export default class Magician extends Stoned {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}
