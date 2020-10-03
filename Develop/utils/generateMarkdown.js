// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
### Description: \n + ${data.description}
`;
}

module.exports = generateMarkdown;
