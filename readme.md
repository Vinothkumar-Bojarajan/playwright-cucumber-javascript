# Playwright with Cucumber

The goal of this project is to setup a baseline project to start using Playwright with Cucumber. 
I will describe the steps to setup the project and the steps to run the tests. 
Also some guidelines to follow to make the project more maintainable.

## Prerequisites
- Node.js
- Visual Studio Code
- In vscode install the extensions:
    - Cucumber
    - Playwright

## Setup the project

1. Create a new directory for the project.
2. Initialize a new Node.js project using ```npm init -f```.
3. Install Playwright using ```npm init playwright@latest```.
4. Install Cucumber using ```npm install -D @cucumber/cucumber```.
5. Create the folders to manage features and steps: 
    - Delete folder ``` playwright.config.ts, tests & tests-examples```
    - Create folder ```src/tests/features```
    - Create folder ```src/tests/step-definitions```
6. Let's create the required feature files and step definitions: 
    - Create file ```src/tests/features/*.feature```
