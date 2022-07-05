![](https://img.shields.io/badge/Microverse-blueviolet) ![](https://img.shields.io/badge/MENGSTU-FENTAW-success)

# Hello React Front End

This react app is to demonstrate the implementation of connection between between a Ruby on Rails back-end and React front-end. This demo app is made with react, react-router, redux-toolkit and connected to the backend with the rails API endpoints.

## Built with

    - Major languages: React.js, CSS, redux-toolkit
    - Technologies used: Github, Linters, Webpack, Gitflow

## Prerequisites

    - npm ( Node Package Manager ) or yarn package manager
    - Git and Github Account

## Getting Started

To get a local copy up and running follow these simple example steps.

- Open terminal
- Change the directory then run the following:

  - Run `git clone git@github.com:mengiefen/hello-react-front-end.git`

  - cd repo-name/

### Setup

- `npm install` or `yarn install` on the root directory of your project

- `PORT=3001 npm start`or `PORT=3001 yarn start` - runs the app in the development mode.
- Open http://localhost:3001 to view it in your browser.

## Linter Installation

- To install local copy **Stylelint**

  `npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x`

- To install local copy of **ESLint**

  `npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x`

### Run Linters

- **Stylelint** linter
  - `npx stylelint "**/*.{css,scss}"` on the root of your directory of your project.
- **ESLint** linter

  - `npx eslint .` on the root of your directory of your project.

## API endpoints

- `/api/v1/greeting` - fetches random greeting
- `/api/v1/messages` - fetches all greeting messages

## Authors

👤 **Mengstu Fentaw**

- Github: [@mengiefen](https://github.com/mengiefen)
- Twitter: [@MengistuFentaw](https://twitter.com/MengistuFentaw)
- Linkedin: [@mengefen](https://www.linkedin.com/in/mengefen/)

## Contributers

## Acknowledgments

- Original design idea by [Nelson Sakwa on Behance](https://www.behance.net/sakwadesignstudio).

## 📝 License

This project is [MIT](./MIT.md) licensed.
