// access the installed npms
const fs = require('fs')
const { prompt } = require('inquirer')

// prompts the user to input project info into their readme
prompt([
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
    // how the no license info will display on the readme
    let licInfo = 'This project does not have a license.'
    let licType = 'None'

    // conditional for when a type of license is chosen
    if (res.license === 'MIT License') {
      licInfo = 'This project uses a MIT License.'
      licType = 'MIT'
    } else if (res.license === 'GNU GLPv3') {
      licInfo = 'This project uses a GNU GLPv3 License.'
      licType = 'GNU%20GLPv3'
    }

// variable for readme format
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
    // function to write README file
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