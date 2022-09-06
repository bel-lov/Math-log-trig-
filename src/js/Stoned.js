import Character from './Character';

export default class Stoned extends Character {
  constructor(name) {
    super(name);
    this.stoned = false;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    if (this.distance < 0 || this.distance > 5) {
      return 0;
    }
    let attack = this._attack - (this._attack / 10) * (this.distance - 1);
    if (this.stoned === true) {
      attack -= Math.log2(this.distance) * 5;
    }
    return Math.floor(attack);
  }

  set attack(value) {
    this._attack = value;
  }
}
