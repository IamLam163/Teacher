class Character {
  constructor(name, health, attackPower) {
    this.name = name;
    this._health = health; // Using underscore to indicate private variable
    this.attackPower = attackPower;
  }

  // Getter for health
  get health() {
    return this._health;
  }

  // Setter for health
  set health(value) {
    this._health = value < 0 ? 0 : value; // Prevent negative health
  }

  attack(opponent) {
    const damage = Math.floor(Math.random() * this.attackPower) + 1;
    opponent.health -= damage;
    console.log(`${this.name} attacks ${opponent.name} for ${damage} damage!`);
  }

  isAlive() {
    return this.health > 0;
  }

  // Static method
  static battle(player1, player2) {
    console.log("Battle begins!");
    while (player1.isAlive() && player2.isAlive()) {
      player1.attack(player2);
      if (!player2.isAlive()) {
        console.log(`${player1.name} wins!`);
        break;
      }

      player2.attack(player1);
      if (!player1.isAlive()) {
        console.log(`${player2.name} wins!`);
        break;
      }
    }
    console.log("Game Over!");
  }
}

// Inheritance
class Warrior extends Character {
  constructor(name, health, attackPower, armor) {
    super(name, health, attackPower);
    this.armor = armor; // Additional property specific to Warrior
  }

  // Overwriting attack method
  attack(opponent) {
    const damage = Math.floor(Math.random() * this.attackPower) + 1;
    opponent.health -=
      damage - opponent.armor > 0 ? damage - opponent.armor : 0; // Consider armor
    console.log(
      `${this.name} attacks ${opponent.name} with a mighty strike for ${damage} damage!`
    );
  }
}

// Example Usage
const knight = new Warrior("Knight", 50, 10, 2);
const rogue = new Character("Rogue", 40, 12);
Character.battle(knight, rogue);
