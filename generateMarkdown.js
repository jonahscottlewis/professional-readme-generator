function renderLicenseBadge(license) {
  if (license !== "none"){
    return `https://img.shields.io/badge/license-${license}-brightgreen`;

  }
  return "";
}

function renderLicenseLink(license) {
  if (license !== "none"){
    return `\n* [License](#license)\n`;
  }
  return "";
}

function renderLicenseSection(license) {
  if (license !== "none") {
 return `\
 ## 
Licensed under the ${license} license.`
  }
  return "";
}

function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

#License
${renderLicenseLink(data.license)}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}
## Credit

${data.credit}
## license
![License](https://img.shields.io/static/v1?label=License&message="${badge}&color=GREEN)` 
}
