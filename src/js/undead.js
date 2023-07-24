import Character from './app';

export default class Undead extends Character {
  constructor(data) {
    super(data);
    this.attack = 25;
    this.defence = 25;
  }
}
