// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//

const modules = ["admin", "core", "uac"];

module.exports = [
    {
      message: "Module",
      name: 'module',
      type: 'select',
      choices: modules,
    },
    {
      message: "Component Name",
      name: 'componentName',
      type: 'input',
    }
  ];
  