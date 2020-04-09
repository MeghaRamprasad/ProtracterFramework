let homepage = require('../pages/homepage')

describe('demo calculator tests', function () {
    it('addition test', function () {

        homepage.get('https://juliemr.github.io/protractor-demo/')
        browser.sleep(2000);

        //  element(by.model('first')).sendKeys('2');
        homepage.enterfirstnumber('2')

        //  element(by.model('second')).sendKeys('3');
        homepage.secondnumber('6')

        // element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickgo();

        browser.sleep(2000);

        //   let result = element(by.cssContainingText('.ng-binding', '5'));

        //   expect(result.getText()).toEqual('5');

        homepage.verifyresult('8')

    });



});