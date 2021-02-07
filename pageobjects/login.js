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