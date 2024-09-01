//FILE TO CALL (LOGIN PAGE, HOME PAGE, CART PAGE) CODE FILE

import HomePage from "../pageobjects/home.page";
import LoginPage from "../pageobjects/login.page";
import CartPage from "../pageobjects/cart.page";
import YourCartPage from "../pageobjects/YourCartPage.page";

describe('Login Test', () => {
    it('Test 1  - Succesfull login - Page Object Based', async () => {
        await LoginPage.open()
        await LoginPage.login("standard_user", "secret_sauce")
        await HomePage.validateOnHomePage()
        await browser.pause(1000)
    });

    it('Test 2  - Add Item To Chart', async () => {
        await CartPage.addItemToCart()
        await CartPage.validateCartItemCount('1')
        await browser.pause(1000)
    });
    it('Test 3  - Go To Your Chart', async () => {
        await YourCartPage.open()
        await YourCartPage.validateCartItemName();
        await browser.pause(1000)
        await YourCartPage.validateoCartTitle();
        await browser.pause(1000)
    });


});

