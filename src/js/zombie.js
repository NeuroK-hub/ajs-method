import Character from './app';

export default class Zombie extends Character {
  constructor(data) {
    super(data);
    this.attack = 40;
    this.defence = 10;
  }
}
