const teamMember = require("../lib/team");

describe("Test functionality of teamMember class", () => {
  let teamMember1 = new teamMember("Danya", "3345", "Danyabu@gmail.com");
  let teamMember2 = new teamMember("Jules", "8874", "Julesgem@gmail.com");

  it("Should return names", () => {
    expect(teamMember1.getName()).toBe("Danya");
    expect(teamMember2.getName()).toBe("Jules");
  });

  it("Should return IDs from teamMember class", () => {
    expect(teamMember1.getId()).toBe("3345");
    expect(teamMember2.getId()).toBe("8874");
  });

  it("Should return emails from teamMember class", () => {
    expect(teamMember1.getEmail()).toBe("Danyabu@gmail.com");
    expect(teamMember2.getEmail()).toBe("Julesgem@gmail.com");
  });

  it("Should return teamMember position from class", () => {
    expect(teamMember1.getPosition()).toBe("✏ Employee");
    expect(teamMember2.getPosition()).toBe("✏ Employee");
  });
});
