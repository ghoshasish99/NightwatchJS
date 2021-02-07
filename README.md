# NightwatchJS with Mocha

### Nightwatch.js is a JavaScript based test automation framework that uses Selenium JavaScript bindings.

### Getting started
* To install nightwatch.js, run :   `npm install nightwatch --save-dev`
* To install chromewebdriver, run : `npm install chromedriver --save-dev`
* To install mocha, run :   `npm install mocha --save-dev`
* To install chai assertion library, run :   `npm install chai --save-dev`

Or else, we can install all of these together using : `npm install nightwatch chromedriver mocha chai --save-dev`

NightwatchJS generates a config file, `nightwatch.conf.js` which contains all the test configurations.
Make the following changes in the `nightwatch.conf.js` file before executing your tests:
```javascript
test_settings: {
    default: {
      disable_error_log: false,
      launch_url: '',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName : 'chrome'
      },

      webdriver: {
        start_process: true,
        server_path : require('chromedriver').path
      }
    }
```