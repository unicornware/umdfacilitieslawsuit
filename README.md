# University of Maryland Racial Discrimination

This story is an in-depth feature on two electricians — DuRay Jones and Michael Bell — who are suing UMD for racial discrimination. 

They filed their lawsuit in federal court last summer, but besides an initial story with the basic facts from the court documents, no one has really reported on what drove them to file or what the process has been like for them.

The project is both a close look at their case and a narrative about how the stress of it has affected their home lives and mental health. 


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
    git clone https://github.com/The-Diamondback-Lab/umd-racial-discrimination.git
    ```

2.  After cloning the repo, open the project. In the boilerplate-reactjs folder, run the following command:

    ```
    npm install
    ```

    in the terminal. This will install the necessary dependencies for the project. A list of those dependencies can be found in `package.json`.

## Design

The prototype for this site can be viewed [here](https://preview.uxpin.com/84f9eee7b6d7c2880279678be0de4bcc16ef7e30#/pages/98489984/documentation/no-panels).

## Development

Open a new terminal tab and run `npm start`. This will launch the project on your local machine, compile your sass files, and minify your css files.

### Deployment

#### [Github Integration](https://devcenter.heroku.com/articles/github-integration)
When ready to deploy, commit and push your changes. If [automatic deploys](https://devcenter.heroku.com/articles/github-integration#automatic-deploys) are enabled, then Heroku will build and deploy all pushes to the specified branch.

#### [With Git](https://devcenter.heroku.com/articles/git)
##### For a new Heroku app
Run the following command `heroku create <name>`.  

This will create a new Heroku application titled _name_.
    
##### For an existing Heroku app
Run the following command `heroku git:remote -a umdracialdiscrimination`.  

This adds a remote to your local repository.

When ready to deloy, 

1. Run the command `npm run build`.

2. Add and commit your changes using the command `git commit -am "<YOUR
   MESSAGE>"`.

3. Run the command `npm run deploy` or `git push heroku master`.  
    

To deploy a non master branch, run the command `git push heroku <non-master-branch-name>:master`.  

This will to the remote’s master branch.

Once deployed, the site can be viewed [here](https://umdracialdiscrimination.herokuapp.com/).

## Built With

- [ReactJS](https://reactjs.org/) - JavaScript Library
- [React Router](https://reacttraining.com/react-router/web/guides/philosophy)  
- [Sass](https://rometools.github.io/rome/) - CSS Preprocessor
- [Google Analytics](https://github.com/fknussel/react-router-ga) - Analytics tracking

## Issues
Designed and developed by [Lexus Drumgold](https://lexusdrumgold.com/) from [The Diamondback Lab](https://github.com/The-Diamondback-Lab); please get in contact with Lex if you have any comments or concerns. 
