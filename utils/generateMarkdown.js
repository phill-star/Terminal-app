// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    "Academic Free License v3.0": "[![License: AFL-3.0](https://img.shields.io/badge/License-AFL--3.0-lightgrey.svg)](https://opensource.org/licenses/AFL-3.0)",
    "Apache license 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "Artistic license 2.0": "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
    // Add other licenses here
  };

  return licenseBadges[license] || "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    "Academic Free License v3.0": "[Academic Free License v3.0](https://opensource.org/licenses/AFL-3.0)",
    "Apache license 2.0": "[Apache license 2.0](https://opensource.org/licenses/Apache-2.0)",
    "Artistic license 2.0": "[Artistic license 2.0](https://opensource.org/licenses/Artistic-2.0)",
    // Add other licenses here
  };

  return licenseLinks[license] || "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSections = {
    "Academic Free License v3.0": `Read more about Academic Free License v3.0 here:`,
    "Apache license 2.0": `Read more about Apache license 2.0 here:`,
    "Artistic license 2.0": `Read more about Artistic license 2.0 here:`,
    // Add other licenses here
  };

  return licenseSections[license] || "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions?](#questions)

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.usage}

  ## How to Contribute
  [Contributor Covenant](https://www.contributor-covenant.org/)  
  ${data.contributing}

  ## Tests
  ${data.testing}

  ## Questions?
  ### Reach me here: 
  [${data.username}](https://github.com/${data.username})  
  ${data.email}`;
}

module.exports = generateMarkdown;