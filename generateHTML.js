function generateHTML(data) {
  return `
  # ${data.title}

  ## Table of Contents
  - [Project description](#Description)
  - [Usage](#Usage)
  - [Installation](#Installation)
  - [Contribution](#Contribution)
  - [Questions](#Questions)
  - [License](#License)
  - [Tests](#Tests)

  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Installation
  ${data.installation}

  ## Contribution
  ${data.contribution}

  ## Questions
  ${data.email}
  [${data.github}](https://github.com/${data.github}/)

  ## License
  ${data.license}
  
  ## Tests
  ${data.tests}
`;
}


module.exports = generateHTML;
