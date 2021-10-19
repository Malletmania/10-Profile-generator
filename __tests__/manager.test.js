const manager = require("../lib/manager");

describe("Test functionality of manager class", () => {
  let teamMember1 = new manager("Danya", "3345", "Danyabu@gmail.com", "A34");
  let teamMember2 = new manager("Jules", "8874", "Julesgem@gmail.com", "T34");

  it("Should return office number", () => {
    expect(teamMember1.getOfficeNumber()).toBe("A34");
    expect(teamMember2.getOfficeNumber()).toBe("T34");
  });

  it("Should return position from class", () => {
    expect(teamMember1.getPosition()).toBe("☕ manager");
    expect(teamMember2.getPosition()).toBe("☕ manager");
  });

  it("should return names from class", () => {
    expect(teamMember1.getName()).toBe("Danya");
    expect(teamMember2.getName()).toBe("Jules");
  });

  it("Should return IDs from class", () => {
    expect(teamMember1.getId()).toBe("3345");
    expect(teamMember2.getId()).toBe("8874");
  });

  it("Should return emails from class", () => {
    expect(teamMember1.getEmail()).toBe("Danyabu@gmail.com");
    expect(teamMember2.getEmail()).toBe("Julesgem@gmail.com");
  });
});
