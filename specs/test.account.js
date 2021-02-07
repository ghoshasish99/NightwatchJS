var accountData = require('../testdata/account.json')
describe('Login and Registration', function() {
    
    test('login should fail with invalid credentials', function (browser) {
        var homePage = browser.page.login();
        homePage.navigate()
          .setValue('@email',accountData.negativeLogin.username)
          .setValue('@password',accountData.negativeLogin.password)
          .click('@btnSubmit')
          .expect.element('@loginerror').to.be.visible;

    });

    test('Account Creation should be successful', function (browser) {
      let random = Math.floor(Math.random()*90000) + 10000;
      let email = accountData.create.email.replace('Ashish','Ashish'+random);
      var homePage = browser.page.login();
      homePage.navigate()
          .createAccount(accountData.create.firstname,accountData.create.lastname,email,accountData.create.password)
  });
  
    after(browser=>browser.end());
  });
