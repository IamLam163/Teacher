This game is a **turn-based battle simulation** in JavaScript that demonstrates key **object-oriented programming (OOP) concepts** such as **classes, inheritance, getters, setters, static methods, and method overriding**. Let’s break it down.

---

## **1. Core Concepts Used in the Game**

### **Classes**

- The game is built using **classes**, where each type of character (e.g., Warrior, Mage) is an **object** with properties and methods.

### **Encapsulation**

- We use **getters and setters** to manage health, preventing negative values.

### **Inheritance**

- **Warrior** and **Mage** classes **inherit** from the **Character** class and extend its functionality.

### **Method Overriding**

- **Warrior** overrides the `attack` method to introduce **rage mode**.
- **Mage** introduces a `castSpell` method for magic attacks.

### **Static Methods**

- `Character.battle(player1, player2)` manages the battle logic between two characters.

---

## **2. Class Breakdown**

### **Character Class (Base Class)**

```javascript
class Character {
    constructor(name, health, attackPower, defense) {
        this.name = name;
        this._health = health; // Private variable convention
        this.attackPower = attackPower;
        this.defense = defense;
    }
```

#### **Key Features**

- **Encapsulated Health System**:

  ```javascript
  get health() {
      return this._health;
  }

  set health(value) {
      this._health = value < 0 ? 0 : value; // Health cannot be negative
  }
  ```

- **Basic Attack System**:

  ```javascript
  attack(opponent) {
      const damage = Math.max(Math.floor(Math.random() * this.attackPower) + 1 - opponent.defense, 1);
      opponent.health -= damage;
      console.log(`${this.name} attacks ${opponent.name} for ${damage} damage!`);
  }
  ```

  - Uses **randomized attack damage**.
  - Accounts for **opponent’s defense**.

- **Battle Logic** (Static Method):

  ```javascript
  static battle(player1, player2) {
      console.log("Battle begins!");
      let round = 1;
      while (player1.isAlive() && player2.isAlive()) {
          console.log(`\\nRound ${round}`);
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
          console.log(`${player1.name} Health: ${player1.health}, ${player2.name} Health: ${player2.health}`);
          round++;
      }
      console.log("Game Over!");
  }
  ```

  - **Turn-based combat**.
  - **Displays round-by-round health updates**.
  - **Ends when one character’s health reaches 0**.

---

### **Warrior Class (Inherits from Character)**

```javascript
class Warrior extends Character {
    constructor(name, health, attackPower, defense, rage) {
        super(name, health, attackPower, defense);
        this.rage = rage;
    }
```

#### **Unique Features**

- **Rage System (Overridden Attack)**
  ```javascript
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
  ```
  - When **rage > 5**, the warrior deals **double damage**.
  - **After using rage mode, the rage resets**.

---

### **Mage Class (Inherits from Character)**

```javascript
class Mage extends Character {
    constructor(name, health, attackPower, defense, mana) {
        super(name, health, attackPower, defense);
        this.mana = mana;
    }
```

#### **Unique Features**

- **Magic Spell System**
  ```javascript
  castSpell(opponent) {
      if (this.mana >= 5) {
          const spellDamage = this.attackPower * 2;
          opponent.health -= spellDamage;
          this.mana -= 5;
          console.log(`${this.name} casts a powerful spell on ${opponent.name} for ${spellDamage} damage!`);
      } else {
          console.log(`${this.name} does not have enough mana to cast a spell!`);
          this.attack(opponent);
      }
  }
  ```
  - If **mana >= 5**, the mage **casts a spell** with **double attack power**.
  - Otherwise, the mage **attacks normally**.

---

## **3. Game Execution**

### **Create Characters**

```javascript
const knight = new Warrior("Knight", 60, 12, 3, 0);
const wizard = new Mage("Wizard", 50, 15, 2, 10);
Character.battle(knight, wizard);
```

- **Knight** (Warrior) starts with **rage = 0**.
- **Wizard** (Mage) starts with **mana = 10**.
- They **fight each other** until one is defeated.

---

## **4. Example Game Output**

```plaintext
Battle begins!

Round 1
Knight attacks Wizard for 8 damage!
Wizard casts a powerful spell on Knight for 30 damage!
Knight Health: 30, Wizard Health: 42

Round 2
Knight attacks Wizard for 10 damage!
Wizard attacks Knight for 6 damage!
Knight Health: 24, Wizard Health: 32

Round 3
Knight enters a rage mode! Double damage!
Knight attacks Wizard for 20 damage!
Wizard attacks Knight for 7 damage!
Knight Health: 17, Wizard Health: 12

Round 4
Knight attacks Wizard for 8 damage!
Wizard does not have enough mana to cast a spell!
Wizard attacks Knight for 5 damage!
Knight Health: 12, Wizard Health: 4

Round 5
Knight attacks Wizard for 6 damage!
Wizard is defeated!
Knight wins!
Game Over!
```

---

## **5. Key Takeaways**

### ✅ **Encapsulation**

- Used **getters and setters** to **restrict direct access** to health.

### ✅ **Inheritance & Method Overriding**

- **Mage** and **Warrior** both extend **Character**.
- **Overridden `attack()` method** in Warrior for **rage mode**.
- **Introduced `castSpell()` in Mage**.

### ✅ **Polymorphism**

- The **same method `attack()` behaves differently** for **Mage and Warrior**.

### ✅ **Static Methods**

- `Character.battle(player1, player2)` **manages the fight** without needing an instance.

---
