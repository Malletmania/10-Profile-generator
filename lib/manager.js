const teamMember = require("./team");

class manager extends teamMember {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
  }

  getOfficeNumber() {
    return this.officeNum;
  }
  getPosition() {
    return "☕ manager";
  }
}

module.exports = manager;
