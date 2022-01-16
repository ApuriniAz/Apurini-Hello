# Apurini Landing Page 

## Description
This is Apurini's landing page project.
All 'visual' data can be easily modified by changing the data.json file.

## General rules for developing this project

### 1. Never push directly to remote `Master` branch, create a pull request

As a general practice the changes into code should be reviewed by other developers:
1. You should pull the latest master branch into your machine.
2. Create a local branch for your changes.
3. Make the changes and push them to a branch with the same name in the remote repo.
4. Create a pull request and set reviewers.
5.  you can merge the changes once all comments from reviewers are answered/fixed and reviewers approved the pull request.

### 2. Develop responsibly

Create enough number of comments, develop a clean code, update the documentation.

If not now, When? If not you, Who?

## How to run it on your local machine!
### 1. Preps
* You need to have <a href="https://nodejs.org/">Node JS</a> installed on your pc. 
* You need to install an IDE to edit files easily. We recommend <a href="https://code.visualstudio.com/">Visual Studio Code</a> (VSC) as a convenient tool.
* You need to install <a href="https://git-scm.com/download/win">GIT</a> on your local machine.
    * To minimize the mistakes with GIT, we recommend to use a git client UI such as <a href="http://gitextensions.github.io/">GIT Extension</a> and operate GIT commands using the UI.
    * You can also use VSC's git extension for the same purposes.

### 2. Clone Files

You should Clone the files from this repository to you computer.
click on the green `Clone` button above and copy the git repository address. then use your git UI client or CLI client to clone the repository into your computer

### 3. Create local `.env` file
After cloning the files, you will need to create a `.env` file in the root folder of the repository. A `.env.example` file already exists there, you can simply copy it in the same place and remove whatever there is after `.env` from file's name

### 4. Add your own data 
Change the data in the ```data.json``` file as well as add any images to ```public/img/```
You can also change styles by modifying the ```public/css``` files.

### 5. A Run the code locally 
Open a terminal in the root directory of the project and run `npm start`

This runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test` 

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.




