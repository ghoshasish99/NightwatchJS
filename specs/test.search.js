var accountData = require('../testdata/account.json')
var productData = require('../testdata/product.json')

describe('Search and Add', function() {
    
    test('should be able to search and a product to basket', function (browser) {
       let random = Math.floor(Math.random()*90000) + 10000;
       let email = accountData.create.email.replace('Ashish','Ashish'+random);
        var homePage = browser.page.login();
        homePage.navigate()
          .createAccount(accountData.create.firstname,accountData.create.lastname,email,accountData.create.password)  
        var searchPage = browser.page.search();
        searchPage.searchProduct(productData.searchitem)
          .expect.element('@searchedProduct').to.be.visible;
        searchPage .addProduct(productData.searchitem)
          .expect.element('@proceedToCheckout').to.be.visible;

    });

    after(browser=>browser.end());
  });
