const fs = require('fs')
const inquirer = require('inquirer')




// array of questions for user
// const questions = [

// ];

inquirer.prompt([
  {
    name: 'title',
    type: 'input',
    message: 'What is your project title?'
  },
  {
    name: 'description',
    type: 'editor',
    message: 'Write a description for your project:'
  },
  {
    name: 'installation',
    type: 'editor',
    message: 'Write the steps to install your project:'
  },
  {
    name: 'usage',
    type: 'editor',
    message: 'Write instructions and provide examples of your project for use:'
  },
  {
    name: 'contribution',
    type: 'editor',
    message: 'Write instructions and guidelines to make contributions for your project:'
  },
  {
    name: 'test',
    type: 'editor',
    message: 'Write instructions on testing:'
  },
  {
    name: 'license',
    type: 'list',
    message: 'Choose a license for your project:',
    choices: ['No License', 'MIT License', 'GNU GLPv3']
  },
  {
    name: 'username',
    type: 'input',
    message: 'What is your GitHub username?'
  },
  {
    name: 'email',
    type: 'input',
    message: 'What is your email?'
  }
])
  .then(res => {
    let licInfo = 'This project does not have a license.'
    let licType = 'None'
    if (res.license === 'MIT License') {
      licInfo = 'This project uses a MIT License.'
      licType = 'MIT'
    } else if (res.license === 'GNU GLPv3') {
      licInfo = 'This project uses a GNU GLPv3 License.'
      licType = 'GNU%20GLPv3'
    }

const readmeInfo = `# ${res.title} ![License badge](https://img.shields.io/badge/License-${licType}-brightgreen)
    
## Description
${res.description}

## Table of Contents:
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${res.installation}

## Usage
${res.usage}

## License
${licInfo}

## Contributing
${res.contribution}

## Tests
${res.test}

## Questions
If you have any additional questions, contact me through my GitHub or email!

GitHub: [${res.username}](https://github.com/${res.username})

Email: ${res.email}
`

    fs.writeFile('README1.md', readmeInfo, err => {
      if (err) {
        console.log(err)
      } else {
        console.log('Successfully created README!')
      }
    })
  })
  .catch(err => {
    console.log(err)
  })



// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init()