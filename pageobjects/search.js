var searchCommands = {
    searchProduct : function(item){
        return this.setValue('@searchfield',item)
                .click('@btnSearch')
    },
    addProduct : function(item){
        return this.click({
                        selector : '//*[text()="'+item+'"]',
                        locateStrategy : 'xpath'
                    })
                .click('@btnAddToBasket')
                .click('@iconBasket')
    }
}

module.exports = {
    commands : [searchCommands],
    elements: {
        searchfield :'input[aria-label="Product search"]',
        btnSearch :'button[aria-label="Search"]',
        searchedProduct :'.MuiCardContent-root > :nth-child(1)',
        btnAddToBasket :{
          selector :  '//button/span[text()="Add to your basket"]',
          locateStrategy : 'xpath'
        },
        iconBasket :'#basket',
        proceedToCheckout :'#proceedtocheckout'
    }
  };