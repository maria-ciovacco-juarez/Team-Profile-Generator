const fs =require("fs");

const path = require("path");

const templatesDir = path.resolve(__dirname, "../templates");

const generateHTML = (employees) => {
  const HTML=[];

  HTML.push (
    employees.filter((employee) => employee.getRole()=== "Manager")
    .map((manager) => renderManager(manager))
  );
  HTML.push(
    employees.filter((employee) => employee.getRole()==="Engineer")
    .map((engineer) => renderEngineer(engineer))
  );
  HTML.push (
    employees.filter((employee) => employee.getRole()==="Intern")
    .map((intern) => renderIntern(intern))
  );

  console.log(HTML, "generateHTML.js");

  return renderFullMakrdown(HTML.join(""));
};

const renderManager = (manager) => {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "manager.html"),
    "utf8"
  );

  template = replaceTemplates(template, "name", manager.getName());
  template = replaceTemplates(template, "id", manager.getId());
  template= replaceTemplates (template, "role", manager.getRole());
  template = replaceTemplates(template, "email", manager.getEmail());
  template = replaceTemplates(
    template,
    "officeNumber",
    manager.getOfficeNumber()
  
  );
  return template;
};

const renderEngineer = (engineer) => {
  let template = fs.readFileSync(
    path.resolve(templates, "engineer.html"),
    "utf8"
  ); 
  template = replaceTemplates(template, "name", engineer.getName());
  template = replaceTemplates(template, "id", engineer.getId());
  template = replaceTemplates(template, "role", engineer.getRole());
  template = replaceTemplates(template, "email", engineer.getEmail());
  template = replaceTemplates(template, "github", engineer.getGithub());

  return template;
  };

  const renderIntern = (intern) => {
    let template = fs.readFileSync(
      path.resolve(templatesDir, "intern.html"),
      "utf8"
    );
    template = replaceTemplates(template, "name", intern.getName());
    template = replaceTemplates(template, "id", intern.getId ());
    template = replaceTemplates(template, "role", intern.getRole());
    template = replaceTemplates(template, "email", intern.getEmail());
    template = replaceTemplates(template, "school", intern.getSchool());

    return template;
  };

  const renderFullMarkdown = (HTML) => {
    let template = fs.readFileSync(
      path.resolve(templatesDire, "full-markdown.html"),
      "utf8"
    );

    return replaceTemplates(template, "team", HTML);
  };

  const replaceTemplates = (template, placeholder, value) => {
    const pattern = new RegExp (`{{${placeholder}}}`, "gm");

    return template.replace(pattern, value);
  };

  module.exports = generateHTML;

