const intern = require("../lib/intern");

describe("Test functionality of Intern class", () => {
  let teamMember1 = new teamMember(
    "Danya",
    "3345",
    "Danyabu@gmail.com",
    "UW Stout"
  );
  let teamMember2 = new intern(
    "Jules",
    "8874",
    "Julesgem@gmail.com",
    "University of Minnesota Mankato"
  );

  it("Should return schools from intern class", () => {
    expect(teamMember1.getSchool()).toBe("UW Stout");
    expect(teamMember2.getSchool()).toBe("University of Minnesota Mankato");
  });

  it("Should return interns position from intern class", () => {
    expect(teamMember1.getPosition()).toBe("👨‍🎓 Intern");
    expect(teamMember2.getPosition()).toBe("👨‍🎓 Intern");
  });

  it("Should return names from intern class", () => {
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
