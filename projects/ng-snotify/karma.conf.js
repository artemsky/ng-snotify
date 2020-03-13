// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-junit-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../../coverage/ng-snotify'),
      reports: ['html', 'lcovonly', 'text-summary', 'cobertura'],
      fixWebpackSourcePaths: true
    },
    remapIstanbulReporter: {
      reports: {
        html: 'coverage',
        cobertura: './coverage/cobertura.xml'
      }
    },
    remapCoverageReporter: {
      'text-summary': null, // to show summary in console
      html: './coverage/html',
      cobertura: './coverage/cobertura.xml'
    },
    reporters: ['progress', 'kjhtml', 'junit'],
    junitReporter: {
      outputFile: 'test-report.xml' // if included, results will be saved as $outputDir/$browserName/$outputFile
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadlessCI'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-gpu',
          '--disable-dev-shm-usage',
          '--ignore-certificate-errors',
          '--window-size=1920,1080'
        ]
      }
    },
    singleRun: false,
    restartOnFileChange: true
  });
};
