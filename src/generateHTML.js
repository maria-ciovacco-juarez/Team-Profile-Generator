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

  



}

