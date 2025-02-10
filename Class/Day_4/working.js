class Student {
  constructor(firstName = "Celestine", lastName = "Ugbu") {
    // console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const student = new Student();
const student1 = new Student("David", "Agwu");
//console.log(student);
//console.log(student1);

// CLASS METHODS (FUNCTIONS of a class)

class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}

const person1 = new Person("John", "Doe", 50, "Nigeria", "Abuja");
const person2 = new Person("Jane", "Mary", 40, "Ghana", "Accra");

//console.log(person1.getFullName());
console.log(person2.skills);
