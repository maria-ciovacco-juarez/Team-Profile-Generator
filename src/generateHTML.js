const generateHTML = team => {
  const html = [];
  //manager html section
  const createManager = manager => {
    let managerHtml= ` 
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
}

