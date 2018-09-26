// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

// Configuration to set the CHROME_BIN environment variable to run Chrome Headless:
//   - https://github.com/karma-runner/karma-chrome-launcher#usage
process.env.CHROME_BIN = require('puppeteer')
  .executablePath();

module.exports = function (config) {
  config.set({
    basePath: '',
    browsers: ['Chrome', 'ChromeHeadless', 'CustomChromeHeadless'],
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    customLaunchers: {
      CustomChromeHeadless: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--no-gpu',
          '--disable-setuid-sandbox'
        ]
      }
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false
  });
};
