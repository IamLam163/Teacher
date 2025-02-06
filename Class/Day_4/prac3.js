class Character {
  constructor(name, health, attackPower, defense) {
    this.name = name;
    this._health = health;
    this.attackPower = attackPower;
    this.defense = defense;
  }

  // Getter for health
  get health() {
    return this._health;
  }

  // Setter for health
  set health(value) {
    this._health = value < 0 ? 0 : value;
  }

  attack(opponent) {
    const damage = Math.max(
      Math.floor(Math.random() * this.attackPower) + 1 - opponent.defense,
      1
    );
    opponent.health -= damage;
    console.log(`${this.name} attacks ${opponent.name} for ${damage} damage!`);
  }

  isAlive() {
    return this.health > 0;
  }

  static battle(player1, player2) {
    console.log("Battle begins!");
    let round = 1;
    while (player1.isAlive() && player2.isAlive()) {
      console.log(`\nRound ${round}`);
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
      console.log(
        `${player1.name} Health: ${player1.health}, ${player2.name} Health: ${player2.health}`
      );
      round++;
    }
    console.log("Game Over!");
  }
}

class Warrior extends Character {
  constructor(name, health, attackPower, defense, rage) {
    super(name, health, attackPower, defense);
    this.rage = rage;
  }

  attack(opponent) {
    let damage = Math.floor(Math.random() * this.attackPower) + 1;
    if (this.rage > 5) {
      damage *= 2; // Double damage when rage is high
      console.log(`${this.name} enters a rage mode! Double damage!`);
      this.rage = 0;
    }
    opponent.health -= Math.max(damage - opponent.defense, 1);
    this.rage += 2;
    console.log(`${this.name} attacks ${opponent.name} for ${damage} damage!`);
  }
}

class Mage extends Character {
  constructor(name, health, attackPower, defense, mana) {
    super(name, health, attackPower, defense);
    this.mana = mana;
  }

  castSpell(opponent) {
    if (this.mana >= 5) {
      const spellDamage = this.attackPower * 2;
      opponent.health -= spellDamage;
      this.mana -= 5;
      console.log(
        `${this.name} casts a powerful spell on ${opponent.name} for ${spellDamage} damage!`
      );
    } else {
      console.log(`${this.name} does not have enough mana to cast a spell!`);
      this.attack(opponent);
    }
  }
}

// Example Usage
const knight = new Warrior("Knight", 60, 12, 3, 0);
const wizard = new Mage("Wizard", 50, 15, 2, 10);
Character.battle(knight, wizard);
