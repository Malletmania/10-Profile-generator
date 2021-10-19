const teamMember = require("./team");

class intern extends teamMember {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
  getPosition() {
    return "👨‍🎓 intern";
  }
}

module.exports = intern;
