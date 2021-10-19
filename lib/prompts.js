const basePrompts = [
  {
    type: "input",
    message: "Please enter name of employee: ",
    name: "name",
  },
  {
    type: "input",
    message: "Please enter employees ID number: ",
    name: "id",
  },
  {
    type: "input",
    message: "Please enter employees work email ",
    name: "email",
  },
];

const oneExtraPrompt = (extraPrompt) => {
  let prompts = [...basePrompts];

  prompts.push(extraPrompt);

  return prompts;
};

const managerPrompts = oneExtraPrompt({
  type: "input",
  message: "Please enter assigned office number: ",
  name: "officeNum",
});

const engineerPrompts = oneExtraPrompt({
  type: "input",
  message: "Please enter Github username: ",
  name: "github",
});

const internPrompts = oneExtraPrompt({
  type: "input",
  message: "Please enter interns school: ",
  name: "school",
});

const menuPrompt = [
  {
    type: "input",
    message: "Would you like to add an engineer, intern, or finish: ",
    name: "output",
  },
];

module.exports = {
  managerPrompts: managerPrompts,
  engineerPrompts: engineerPrompts,
  internPrompts: internPrompts,
  menuPrompt: menuPrompt,
};
