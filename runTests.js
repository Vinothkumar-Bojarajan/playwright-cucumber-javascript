import { exec } from 'child_process';
import { createWriteStream } from 'fs';

// To execute all feature files
const playwrightCommand = 'npx cucumber-js --config=config/cucumber.cjs --import src/tests/step-definitions/*.mjs';

const logStream = createWriteStream('./execution_logs.md', { flags: 'a' });

console.log("Starting Playwright Cucumber tests...");

const testProcess = exec(playwrightCommand);

testProcess.stdout.on('data', function (data) {
  console.log(data);
  logStream.write(data);  // Write realtime output to log file
});

testProcess.stderr.on('data', function (data) {
  console.error(data);
  logStream.write(data);  // Write errors to log file
});

testProcess.on('exit', function (code) {
  logStream.end();  // Close the stream
  console.log('Playwright Cucumber tests completed with exit code ' + code);
  process.exit(code);  // Exit with the same code as the test process
});
