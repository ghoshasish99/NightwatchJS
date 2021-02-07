var accountData = require('../testdata/account.json')
var productData = require('../testdata/product.json')
var addressData = require('../testdata/address.json')
var paymentData = require('../testdata/payment.json')

describe('Buy Product', function() {
    
    test('should be able to buy a product', function (browser) {
       let random = Math.floor(Math.random()*90000) + 10000;
       let email = accountData.create.email.replace('Ashish','Ashish'+random);
        var homePage = browser.page.login();
        homePage.navigate()
          .createAccount(accountData.create.firstname,accountData.create.lastname,email,accountData.create.password)  
        var searchPage = browser.page.search();
        searchPage.searchProduct(productData.searchitem)
          .expect.element('@searchedProduct').to.be.visible;
        searchPage.addProduct(productData.searchitem)
          .click('@proceedToCheckout');
        var paymentPage = browser.page.payment();
        paymentPage.enterAddressDetails(addressData.title,addressData.firstname,addressData.lastname,addressData.addr1,addressData.addr2,addressData.city,addressData.state,addressData.zip)
          .enterPaymentDetails(paymentData.cardnumber,paymentData.nameOnCard,paymentData.expiryMonth,paymentData.expiryYear,paymentData.securityCode);
    });

    after(browser=>browser.end());
  });
