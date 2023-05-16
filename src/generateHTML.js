const generateHTML = team => {
  const html = [];
  //manager html section
  const createManager = manager => {
    let managerHtml = ` 
    <div class="column">
        <div class="card">
            <div class="container">
                <h2>${manager.getName()}</h2>
                <h3>Title: ${manager.getRole()}</h3>
                <p>Employee ID: ${manager.getId()}</p>
                <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                <p>Office Number: ${manager.getOfficeNumber()}</p>   
            </div>
        </div>
        </div>
          `;
    html.push(managerHtml);
  };

  //engineer html section
  const createEngineer = engineer => {
    let engineerHtml = ` 
    <div class="column">
        <div class="card">
            <div class="container">
                <h2>${engineer.getName()}</h2>
                <h3>Title: ${engineer.getRole()}</h3>
                <p>Employee ID: ${engineer.getId()}</p>
                <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                <p>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></p>  
            </div>
        </div>
        </div>
          `;
    html.push(engineerHtml);
  };

  const createIntern = intern => {
    let internHtml = ` 
    <div class="column">
        <div class="card">
            <div class="container">
                <h2>${intern.getName()}</h2>
                <h3>Title: ${intern.getRole()}</h3>
                <p>Employee ID: ${intern.getId()}</p>
                <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                <p>School: ${intern.getSchool()}</p>    
            </div>
        </div>
        </div>
          `;
          html.push(internHtml)
  };

  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      createManager(team[i]);
    }
    if (team[i].getRole() === "Engineer") {
      createEngineer(team[i]);
    }
    if (team[i].getRole() === "Intern") {
      createIntern(team[i]);
    }
  }
  return html.join("");

}

module.exports = team => { 
  return`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Team Directory</title>
      <link rel="stylesheet" href="./dist/style.css"/>
    </head>
    <body>
      <h1>My Team Directory</h1>

      <div class="column">
      <div class="card">
          <div class="container">
              ${generateHTML(team)}
                  
          </div>
      </div>
      </div>
    </body>
  </html>
  `;
}