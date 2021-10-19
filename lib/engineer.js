const teamMember = require("./team");

class engineer extends teamMember {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGitHub() {
    return this.github;
  }
  getPosition() {
    return "🚀 engineer";
  }
}

module.exports = engineer;
