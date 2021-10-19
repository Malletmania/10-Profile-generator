const fs = require("fs");
const inquirer = require("inquirer");
const prompts = require("./lib/prompts");
const pageCode = require("./lib/pageCode");

const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

function writeToFile(fileName, data) {
  fs.writeFile("./dist/" + fileName, data, (err) => {
    err ? console.error(err) : console.log("Webpage completed " + fileName);
  });
}

let cardData = [];

async function promptmanager() {
  await inquirer.prompt(prompts.managerPrompts).then((res) => {
    let newmanager = new manager(res.name, res.id, res.email, res.officeNum);

    cardData.push({
      name: newmanager.getName(),
      role: newmanager.getPosition(),
      id: newmanager.getId(),
      email: newmanager.getEmail(),
      extra: {
        key: "Office Number",
        value: newmanager.getOfficeNumber(),
      },
    });
  });
}

async function promptengineer() {
  await inquirer.prompt(prompts.engineerPrompts).then((res) => {
    let newengineer = new engineer(res.name, res.id, res.email, res.github);

    cardData.push({
      name: newengineer.getName(),
      role: newengineer.getPosition(),
      id: newengineer.getId(),
      email: newengineer.getEmail(),
      extra: {
        key: "GitHub",
        value: `<a href="https://github.com/${newengineer.getGitHub()}" target="_blank">${newengineer.getGitHub()}</a>`,
      },
    });
  });
}

async function promptIntern() {
  await inquirer.prompt(prompts.internPrompts).then((res) => {
    let newIntern = new intern(res.name, res.id, res.email, res.school);

    cardData.push({
      name: newIntern.getName(),
      role: newIntern.getPosition(),
      id: newIntern.getId(),
      email: newIntern.getEmail(),
      extra: {
        key: "School",
        value: newIntern.getSchool(),
      },
    });
  });
}

async function promptMenu() {
  await inquirer.prompt(prompts.menuPrompt).then(async (res) => {
    if (res.output === "engineer")
      await promptengineer().then(async () => {
        await promptMenu();
      });
    else if (res.output === "intern")
      await promptIntern().then(async () => {
        await promptMenu();
      });
  });
}

function init() {
  promptmanager()
    .then(() => promptMenu())
    .then(() => {
      console.log("Generating team now!");
      writeToFile("index.html", pageCode.html(cardData));
      writeToFile("style.css", pageCode.css);
    });
}

init();
