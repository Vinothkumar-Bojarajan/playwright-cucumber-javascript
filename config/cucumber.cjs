module.exports = {
    default: {
        timeout: 60000, // Set global timeout to 60 seconds
        paths: [
            "src/tests/features"
        ], 
        dryRun: false,
        format: [
            "progress-bar",
            "summary",
            "json:reports/cucumber-report.json", // Generates a JSON report
            "html:reports/cucumber-report.html" // Generates a HTML report
        ],
        formatOptions: {
            colorsEnabled: true,
            snippetInterface: "async-await"
        },
        import: [
            "src/tests/step-definitions/*.mjs"
        ],
        parallel: 1 // Number of concurrent threads
    }
}