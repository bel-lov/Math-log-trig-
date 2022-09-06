import Stoned from './Stoned';

export default class Daemon extends Stoned {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}
