# Playwright+JS for Cucumber test cases

This repository contains a proof of concept (POC) for using Playwright with Cucumber in a JavaScript environment. This guide will help you set up and use this repository effectively.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (version 14 or higher)
- npm (version 6 or higher)
- Visual Studio Code
- Git

## Setup

Follow these steps to set up the repository:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/Vinothkumar-Bojarajan/playwright-cucumber-javascript.git

    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Install Playwright browsers:**
    ```sh
    npx playwright install
    ```

## Running Tests

To execute the tests, use the following command:
```sh
node .\runTests.js
```

## Project Structure

- `features/`: Contains the Cucumber feature files.
- `step-definitions/`: Contains the step definitions for the Cucumber tests.
- `support/`: Contains support files and hooks.
- `playwright.config.js`: Configuration file for Playwright.

## Writing Tests

1. **Create a feature file:**
    Add your feature file in the `features/` directory with a `.feature` extension.

2. **Create step definitions:**
    Add your step definitions in the `steps/` directory with a `.mjs` extension.

3. **Run your tests:**
    Execute `node .\runTests.js` to run the tests.
    It is executed with cucumber test runner. 

## Contributing

If you want to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contact

If you have any questions or feedback, please open an issue or contact the repository owner.