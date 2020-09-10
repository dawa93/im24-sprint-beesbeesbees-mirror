const Grub = require("./Grub");

class Bee extends Grub {
  // TODO..
  constructor() {
    super();
    this.age = 5;
    this.color = "yellow";
    this.job = "Keep on growing";
  }
}

// class Bee extends Grub {
//   // TODO..
//   age = 5;
//   color = "yellow";
//   job = "Keep on growing";
// }

module.exports = Bee;
