// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `[![${license}](https://img.shields.io/badge/license-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else {
    return `[License](https://opensource.org/licenses/${license})`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the [${license} license](${renderLicenseLink(
      license
    )}).`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const section = renderLicenseSection(data.license);

  return `# ${data.title}

${badge}

${data.desc}

## Table of Contents

- Installation
- Usage
- License
- Contributing
- Contact

## Installation

Use the following command to install dependencies:

\`\`\`bash
${data.install}
\`\`\`

Use the following comand to test:

\`\`\`bash
${data.test}
\`\`\`

## Usage

${data.usage}

### Repository

Link to Repository: \`${data.repoLink}\`

### Using the Repository

${data.repo}

${section}

## Contributing

${data.contribute}

## Contact

For any questions or feedback, feel free to reach out to:

- GitHub: [${data.user}](https://github.com/${data.user})
- Email: \`${data.email}\`

`;
}

module.exports = generateMarkdown;
