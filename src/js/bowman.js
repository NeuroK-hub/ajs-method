import Character from './app';

export default class Bowman extends Character {
  constructor(data) {
    super(data);
    this.attack = 25;
    this.defence = 25;
  }
}
