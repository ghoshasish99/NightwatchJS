var paymentCommands = {
    enterAddressDetails : function(title,fname,lname,addr1,addr2,city,state,zip){
        return this.setValue('@title',title)
                .setValue('@firstname',fname)
                .setValue('@lastname',lname)
                .setValue('@addr1',addr1)
                .setValue('@addr2',addr2)
                .setValue('@city',city)
                .setValue('@state',state)
                .setValue('@zip',zip)
    },
    enterPaymentDetails : function(cardNo,name,month,year,code){
        return this.click('@btnNext')
                .setValue('@cardNo',cardNo)
                .setValue('@nameOnCard',name)
                .setValue('@expirymonth',month)
                .setValue('@expiryyear',year)
                .setValue('@securitycode',code)
                .click('@btnConfirm');
                
    }
}

module.exports = {
    commands : [paymentCommands],
    elements: {
        title :'#datitle',
        firstname :'#dafirstname',
        lastname :'#dalastname',
        addr1 :'#daaddressline1',
        addr2 :'#daaddressline2',
        city :'#dacity',
        state :'#dastateprovinceregion',
        zip :'#dazippostcode',
        btnNext :'#buttonnext > .MuiButton-label',
        cardNo :'#cardnumber',
        nameOnCard :'#nameoncard',
        expirymonth :'#expirymonth',
        expiryyear :'#expiryyear',
        securitycode :'#securitycode',
        btnConfirm :
        {
          selector:  '//*[text()="Confirm"]',
          locateStrategy: 'xpath'
        }
  }
};