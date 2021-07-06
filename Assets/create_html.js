const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");

const render = employees => {
  const html = [];
  const htmlP = [];

  html.push(employees
  //this creates a new array html with all elements that are equal to role Manager
  //and save them into the html array.
  .filter(function(employee) { 
    return (employee.getRole() === "Manager")
  }).map(function(manager) { 
    return renderManager(manager)}).join("") 
  );
  

  html.push(employees
  //this creates a new array html with all elements that are equal to role Engineer
  //and save them into the html array.
  .filter(function(employee) { 
    return (employee.getRole() ===  "Engineer")
  }).map(function(engineer) {
    return renderEngineer(engineer)}).join("")
  );

  html.push(employees
  //this creates a new array html with all elements that are equal to role Intern
 //and save them into the html array.
  .filter(function(employee) { 
    return (employee.getRole() ===  "Intern")
  }).map(function(intern) {
    return renderIntern(intern)}).join("")
  );

  return renderMain(html.join(""));

};

//this function dynamically builds the html for manager.
const renderManager = function(manager) {
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
  //this replaces name, role, email, id, and officeNumber with their corresponding values as entered
  //in by the user responses on the terminal.
  template = replacePlaceholders(template, "name", manager.getName());
  template = replacePlaceholders(template, "role", manager.getRole());
  template = replacePlaceholders(template, "email", manager.getEmail());
  template = replacePlaceholders(template, "id", manager.getId());
  template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
  return template;
};

//this function dynamically builds the html for engineer.
const renderEngineer = function(engineer) {
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  //this replaces name, role, email, id, and github with their corresponding values as entered
  //in by the user responses on the terminal.
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "role", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "github", engineer.getGithub());
  return template;
};

//this function dynamically builds the html for intern.
const renderIntern = function(intern) {
  //this creates the html.
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  //replace name, role, email, id, and school with their corresponding values as entered
  //in by the user responses on the terminal.
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "role", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());
  return template;
};

const renderMain = function(html) {
  const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
  return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;