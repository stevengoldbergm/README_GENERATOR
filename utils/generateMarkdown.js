// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseBadge = ''
let licenseLink = ''

function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0':
      licenseBadge = 'https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg';
      break;
    case 'BSD 3-Clause':
      licenseBadge = 'https://img.shields.io/badge/License-BSD_3--Clause-orange.svg';
      break;
    case 'BSD 2-Clause':
      licenseBadge = 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg';
      break;
    case 'GNU General Public License (GPL-3)':
      licenseBadge = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
      break;
    case 'GNU General Public License (GPL-2)':
      licenseBadge = 'https://img.shields.io/badge/License-GPL_v2-blue.svg';
      break;
    case 'GNU Library or "Lesser" General Public License (LGPL)':
      licenseBadge = 'https://img.shields.io/badge/License-LGPL_v3-blue.svg';
      break;
    case 'MIT license':
      licenseBadge = 'https://img.shields.io/badge/License-MIT-yellow.svg';
      break;
    case 'Mozilla Public License 2.0':
      licenseBadge = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';
      break;
    case 'Ecliipse Public License version 2.0':
      licenseBadge = 'https://img.shields.io/badge/License-EPL_2.0-red.svg';
      break;
    default:
      licenseBadge = '';
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0':
      licenseLink = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'BSD 3-Clause':
      licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'BSD 2-Clause':
      licenseLink = 'https://opensource.org/licenses/BSD-2-Clause';
      break;
    case 'GNU General Public License (GPL-3)':
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'GNU General Public License (GPL-2)':
      licenseLink = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
      break;
    case 'GNU Library or "Lesser" General Public License (LGPL)':
      licenseLink = 'https://www.gnu.org/licenses/lgpl-3.0';
      break;
    case 'MIT license':
      licenseLink = 'https://opensource.org/licenses/MIT';
      break;
    case 'Mozilla Public License 2.0':
      licenseLink = 'https://opensource.org/licenses/MPL-2.0';
      break;
    case 'Ecliipse Public License version 2.0':
      licenseLink = 'https://opensource.org/licenses/EPL-2.0';
      break;
    default:
      licenseLink = '';
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'None') {
    return `
  ## License
  
  [![License: ${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})

  This project uses the following license: ${license}.

  Click the badge to access the full license text.
  `
  } else {
    return ''
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // const {title, description, install, usage, license, cont, test, github, email} = data
  console.log(data.title);
  console.log(typeof(data.title));
  console.log(data.description);
  console.log(typeof(data.description));

  function licenseBadgeCheck() {
    if (data.license !== 'None') {
      return `[![License: ${data.license}](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})`;
    } else {
      return '';
    }
  }

  return `
  # ${data.title}

  ${licenseBadgeCheck()}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions?](#questions)

  ## Description

  ${data.description}

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.cont}

  ## Tests

  Follow the below steps to test the program:

    ${data.test}

  ## Questions

  For more information, feel free to contact me:

  E-mail: [${data.email}](mailto:${data.email})

  GitHub: [github.com/${data.github}](https://github.com/${data.github})
  `;
}

module.exports = generateMarkdown;
