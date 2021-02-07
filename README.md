# NightwatchJS with Mocha

[![Build Status](https://dev.azure.com/AutomationsTools/Execution/_apis/build/status/ghoshasish99.NightwatchJS?branchName=main)](https://dev.azure.com/AutomationsTools/Execution/_build/latest?definitionId=4&branchName=main)

### Nightwatch.js is a JavaScript based test automation framework that uses Selenium JavaScript bindings.

### Getting started
* To install nightwatch.js, run :   `npm install nightwatch --save-dev`
* To install chromewebdriver, run : `npm install chromedriver --save-dev`
* To install mocha, run :   `npm install mocha --save-dev`

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
        browserName : 'chrome',
        //To run in headless mode
        chromeOptions : {
          "args" : ["headless"]
       }
      },

      webdriver: {
        start_process: true,
        server_path : require('chromedriver').path
      }
    }
```
### Nightwatch has native support for using the  BDD interface for writing tests. No further configuration is necessary.
The BDD interface lets you write tests in `describe` and `test` blocks. An example below :
```javascript
describe('Login and Registration', function() {    
    test('login should fail with invalid credentials', function (browser) {
        browser.url('http://awswrkshpalb-1570520390.us-west-2.elb.amazonaws.com:3000/cts-shop/login')
          .setValue('#email',accountData.negativeLogin.username)
          .setValue('#password',accountData.negativeLogin.password)
          .click('form.login > .MuiButtonBase-root > .MuiButton-label')
    });
  after(browser=>browser.end());
});      
```
It is important to note that the `browser` is available globally for usage.

# Selectors/LocateStrategy
Nightwatch uses `css` as the default locator strategy.
A shorthand like below can be easily used to identify an object
```javascript
module.exports = {
    elements: {
        firstname :'#dafirstname',
        lastname :'#dalastname'
  }
};
```
Once can also choose `xpath` as a selector. An example is shown below :
```javascript
module.exports = {
    elements: {
        btnConfirm :{
          selector:  '//*[text()="Confirm"]',
          locateStrategy: 'xpath'
        }
  }
};
```
# Page Object Model
The location of the page object files can be specified in the `page_objects_path` tag of the `nightwatch.conf.js` file.
In the page object file, one can export `elements` and custom `commands` specific to that page, like so :
```javascript
var loginCommands = {
    createAccount : function(fname,lname,email,password){
        return this.click('@btncreateAccount1')
            .setValue('@firstname',fname)
            .setValue('@lastname',lname)
            .setValue('@registeremail',email)
            .setValue('@password',password)
            .setValue('@confirmpassword',password)
            .click('@btncreateAccount2')
            .expect.element('@productSearch').to.be.visible;
    }
}

module.exports = {
    commands : [loginCommands],
    url: 'http://awswrkshpalb-1570520390.us-west-2.elb.amazonaws.com:3000/cts-shop/login',
    elements: {
        email :'#email',
        password :'#password',
        btnSubmit :'form.login > .MuiButtonBase-root > .MuiButton-label',
        loginerror :'[class="MuiTypography-root MuiTypography-caption MuiTypography-colorSecondary MuiTypography-alignCenter"]',
        btncreateAccount1:'div.login > .MuiButtonBase-root > .MuiButton-label',
        firstname :'#firstname',
        lastname :'#lastname',
        registeremail :'#registeremail',
        confirmpassword :'#confirmpassword',
        btncreateAccount2:'form.register > .MuiButtonBase-root > .MuiButton-label',
        productSearch :'input[aria-label="Product search"]'
    }
  };
```
This is then used by the actual test in this way :
```javascript
describe('Login and Registration', function() {   
    test('Account Creation should be successful', function (browser) {
      var homePage = browser.page.login();
      homePage.navigate()
          .createAccount("Ashish","Ghosh","Ashish@shop.com","mypassword")
  });
    after(browser=>browser.end());
});
```
`login` in the above code is the file name of the page object.

To run a Nightwatch test use `npx nightwatch`. This is assuming, you have specified the location of your test files in the `src_folders` tag of the `nightwatch.conf.js` file.

To know more on Nightwatch, go [this link](https://nightwatchjs.org/)