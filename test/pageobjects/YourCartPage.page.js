import Page from "./page";
import { $, expect } from '@wdio/globals'

class YorCartPage extends Page {
        // Define all elements on the cart page
        get cartItemName() {
            return $('.inventory_item_name');
        }
    
        get cartTitle() {
            return $('.title');
        }
    
        async validateCartItemName(){
            await expect(this.cartItemName).toBeExisting();
            await browser.pause(1000);
        }

        async validateoCartTitle(){
            await expect(this.cartTitle).toBeExisting();
            await browser.pause(1000)
        }

        open ()  {
            return super.open("cart.html")
        }
    }
    
    export default new YorCartPage();
    