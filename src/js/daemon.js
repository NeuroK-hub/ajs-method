import Character from './app';

export default class Daemon extends Character {
  constructor(data) {
    super(data);
    this.attack = 10;
    this.defence = 40;
  }
}
