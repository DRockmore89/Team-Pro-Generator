//inquirer for collecting user input
const inquirer = require("inquirer");
//fs is a Node standard library package for reading and writing files.
//that is, the `fs` module enables interaction with the file system.
const fs = require("fs");
//path module to help make path manipulation easier with its helper functions.
const path = require("path");

//to avoid errors such as "Manager is not defined" and
//"TypeError: Manager is not a constructor", import classes
const Manager = require("./Assets/Manager");
const Engineer = require("./Assets/Engineer");
const Intern = require("./Assets/intern");

const manager = new Manager;
const engineer = new Engineer;
const intern = new Intern;

const OUTPUT_DIR = path.resolve(__dirname, "template_output")
const outputPath = path.join(OUTPUT_DIR, "team_index.html");

const render = require("./Assets/create_html");

const allEmployees = [];
const idArray = [];

function appMenu() {

  function createManager() {
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "Please enter your team employee's name: "
      },
      {
        type: "input",
        name: "managerId",
        message: "Please enter your team manager's ID: "
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Please enter your team manager's email: "
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "Please enter your team manager's office number: "
      }
    ]).then(function (data) {
      const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber);
      allEmployees.push(manager);
      idArray.push(data.managerId);
      employeeRoles();
    });
  }

  function employeeRoles() {

    inquirer.prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "None"
        ]
      }
    ]).then(function (userChoice) {
      switch(userChoice.memberChoice) {
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      default:
        buildTeam();
      }
    });
  }

  function addEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Please enter your team engineer's name: ",
      },
      {
        type: "input",
        name: "engineerID",
        message: "Please enter your team engineer's ID: "
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Please enter your team engineer's email: "
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "Please enter your team engineer's Github username: "
      }
    ]).then(function (data) {
      const engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGithub);
      allEmployees.push(engineer);
      idArray.push(data.engineerId);
      employeeRoles();
    });
  }

  function addIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "Please enter your team intern's name: ",
      },
      {
        type: "input",
        name: "internId",
        message: "Please enter your intern's ID: "
      },
      {
        type: "input",
        name: "internEmail",
        message: "Please enter your team intern's email?"
      },
      {
        type: "input",
        name: "internSchool",
        message: "Please enter your intern's school username: ",
      }
    ]).then(function (data) {
      const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
      allEmployees.push(intern);
      idArray.push(data.internId);
      employeeRoles();
    });
  }

  function buildTeam() {
  //Add: "utf-8" to aviod this error:
  //TypeError [ERR_INVALID_ARG_TYPE]: The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView.

  //node:fs:505
  //handleErrorFromBinding(ctx);
  fs.writeFileSync(outputPath, render(allEmployees), "utf-8");
  }

  createManager();

}


appMenu();