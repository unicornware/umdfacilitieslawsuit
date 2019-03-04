# University of Maryland Facilities Management Lawsuit

> This story is an in-depth feature on two electricians — DuRay Jones and Michael Bell — who are suing UMD for racial discrimination. They filed their lawsuit in federal court last summer, but besides an initial story with the basic facts from the court documents, no one has really reported on what drove them to file or what the process has been like for them. The project is both a close look at their case and a narrative about how the stress of it has affected their home lives and mental health. 

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

#### Overview
[Getting Started](#getting-started)  
[Design](#design)  
[Development](#development)  
[Deployment](#deployment)  
[Built With](#built-with)  
[Issues](#issues) 


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To work on this project, you'll need to have Node and Git installed. If you don't already, you can download Node [here](https://nodejs.org/en/download/) and Git [here](https://git-scm.com/downloads).

### Installing

Follow the steps below to get your development enviroment set up.

1.  Pull the repo. Open the terminal and and run the following:

    ```
    git clone https://github.com/The-Diamondback-Lab/umd-facilities-lawsuit.git
    ```

2.  After cloning the repo, open the project. In the boilerplate-reactjs folder, run the following command:

    ```
    npm install
    ```

    in the terminal. This will install the necessary dependencies for the project. A list of those dependencies can be found in `package.json`.

3. Install Firebase command line tools using npm:
    ```
    npm install -g firebase-tools
    ```  
    
4. To set up the Firebase targets, run the following in your terminal:
    1. `firebase target:apply hosting staging staging-umdfacilitieslawsuit`
    2. `firebase target:apply hosting production umdfacilitieslawsuit`


## Development
Open a new terminal tab and run `npm run dev`. This will launch the project on
your local machine, compile your sass files, and minify your css files.

## Deployment
If necessary, update `.firebaserc` and `firebase.json` to configure Firebase
Hosting, and push the changes to a release branch.
- **Note:** The predeploy and rewrites properties are not mandatory for
   Firebase, but they are mandatory for this project. 

**Staging**  
Deploy using one of the following options:
- Run `npm run deploy-staging` in your terminal to deploy to Firebase.
- Run `firebase deploy -m "<YOUR_MESSAGE>" --only hosting:staging` to
  deploy with an optional deploy message.

**Production**  
Deploy using one of the following options:
- Run `npm run deploy-production` in your terminal to deploy to Firebase. The
  predeploy hook will create a production build of the project.
- Run `firebase deploy -m "<YOUR_MESSAGE>" --only hosting:production`
  to deploy with an optional deploy message.


## Built With
- [ReactJS](https://reactjs.org/) - JavaScript Library
- [Sass](https://rometools.github.io/rome/) - CSS Preprocessor
- [Google Analytics for React Router](https://github.com/fknussel/react-router-ga)


## Issues
Designed and developed by [Lexus Drumgold](https://lexusdrumgold.com/) from [The Diamondback Lab](https://github.com/The-Diamondback-Lab); please get in contact with Lex if you have any comments or concerns.
