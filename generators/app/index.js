'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
const mkdirp = require('mkdirp');

module.exports = class extends Generator{

  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the prime ' + chalk.red('generator-vuex-starter') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'Please input project name (vue_app):',
      default: 'vue_app'
    },
    {
      type: 'input',
      name: 'projectDesc',
      message: 'Please input project description:',
      default: 'a vue app with vuex-generator'
    },
    {
      type: 'input',
      name: 'projectAuthor',
      message: 'Author (god):',
      default: 'god'
    },
    {
      type: 'list',
      name: 'projectLicense',
      message: 'Please choose license:',
      choices: ['MIT', 'ISC', 'Apache-2.0', 'AGPL-3.0']
    }];

    return this.prompt(prompts).then(props=>{
      // To access props later use this.props.someAnswer;
      this.props = props;

    });
  }

  defaults() {
    if (path.basename(this.destinationPath()) !== this.props.projectName) {
      this.log(
        'Your generator must be inside a folder named ' + this.props.projectName + '\n' +
        'I\'ll automatically create this folder.'
      );
      mkdirp(this.props.projectName);
      this.destinationRoot(this.destinationPath(this.props.projectName));
    }
  }

  writing() {
    console.log(this.templatePath('package.json'));
    var pkg = this.fs.readJSON(this.templatePath('package.json'), {});
    pkg.keywords = pkg.keywords || [];
    pkg.keywords.push('vue-starter');
    pkg.keywords.push('generator-vue');
    pkg.keywords.push('vuex-starter');
    pkg.name = this.props.projectName;
    pkg.description = this.props.projectDesc;
    pkg.author = this.props.projectAuthor;
    pkg.license = this.props.projectLicense;
    this.fs.writeJSON(this.destinationPath('package.json'), pkg);

    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('index.html')
    );
    this.fs.copy(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc')
    );
    this.fs.copy(
      this.templatePath('README.md'),
      this.destinationPath('README.md')
    );
    this.fs.copy(
      this.templatePath('build'),
      this.destinationPath('build')
    );
    this.fs.copy(
      this.templatePath('config'),
      this.destinationPath('config')
    );
    this.fs.copy(
      this.templatePath('src'),
      this.destinationPath('src')
    );
  }
};
