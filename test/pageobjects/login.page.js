// import { $ } from '@wdio/globals'
import Page from './page';
import { $ } from '@wdio/globals'

// /**
//  * sub page containing specific selectors and methods for a specific page
//  */
// class LoginPage extends Page {
//     /**
//      * define selectors using getter methods
//      */
//     get inputUsername () {
//         return $('#username');
//     }

//     get inputPassword () {
//         return $('#password');
//     }

//     get btnSubmit () {
//         return $('button[type="submit"]');
//     }

//     /**
//      * a method to encapsule automation code to interact with the page
//      * e.g. to login using username and password
//      */
//     async login (username, password) {
//         await this.inputUsername.setValue(username);
//         await this.inputPassword.setValue(password);
//         await this.btnSubmit.click();
//     }

//     /**
//      * overwrite specific options to adapt it to page object
//      */
//     open () {
//         return super.open('login');
//     }
// }

// export default new LoginPage();

//poppy
class LoginPage extends Page{

    // Define All element on the page
    get usernameTextBox () {
        return $('#user-name')
    }
    get passwordTextBox () {
        return $("#password")
    }
    get loginButton () {
        return $("#login-button")
    }

    //CLASS METHOD/ FUNCTION
    //Function Input User Name
    async inputUsername (username) {
        await this.usernameTextBox.setValue(username)
    }

    //Function Input Password
    async inputPassword (password) {
        await this.passwordTextBox.setValue(password)
        await browser.pause(1000)
    }

    //Function Login Button
    async clickLoginButton () {
        await this.loginButton.click()
        await browser.pause(1000)
    }

    //Function Login
    async login(username, password) {
       await this.inputUsername(username)
       await browser.pause(1000)
       await this.inputPassword(password)
       await browser.pause(1000)
       await this.clickLoginButton()
       await browser.pause(1000)
    }

    open () {
        return super.open("")
    }
}

export default new LoginPage();
