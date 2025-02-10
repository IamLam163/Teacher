class gameCharacter {
  constructor(name, health, attackPower, defence) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
    this.defence = defence;
  }
  attack(opponent) {
    const damage = Math.max(
      Math.floor(Math.random() * this.attackPower) + 1 - opponent.defence,
      0
    );
    opponent.health -= damage;
    //opponent.health=opponent.health-damage;
    console.log(`${this.name} attacks ${opponent.name} for ${damage} damage `);
  }
  isAlive() {
    return this.health > 0;
  }
}

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.round = 1;
  }
  start() {
    console.log("Start Game");
    while (this.player1.isAlive() && this.player2.isAlive()) {
      console.log(`\nRound ${this.round}`);
      //Player 1 atack player2
      this.player1.attack(this.player2);
      if (!this.player2.isAlive()) {
        console.log(`\nRound ${this.round}`);
        break;
      }
      // Player 2 attacks Player 1
      this.player2.attack(this.player1);
      if (!this.player1.isAlive()) {
        console.log(`${this.player2.name} wins!`);
        break;
      }
      // Display health stats
      console.log(
        `${this.player1.name} Health: ${this.player1.health}, ${this.player2.name} Health: ${this.player2.health}`
      );

      this.round++;
    }
    console.log("Game Over!");
  }
}
const hero = new gameCharacter("Hero", 50, 10, 3);
const Vilain = new gameCharacter("Vilain", 50, 6, 1);
const game = new Game(hero, Vilain);
game.start();
