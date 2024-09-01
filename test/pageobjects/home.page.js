import Page from "./page";
import { $, expect } from '@wdio/globals'


class HomePage extends Page {
    
    // Define All element in the page
    get cartIcon() { 
        return $("#shopping_cart_container")
    }
    get addToCartButton () {
        return $("#add-to-cart-sauce-labs-backpack")
    }
    get productImage() {
        return $("#item_4_img_link")
    }

    async validateOnHomePage() {
        await expect(this.cartIcon).toBeExisting();
        await browser.pause(1000)
        await expect(this.addToCartButton).toBeExisting();
        await browser.pause(1000)
        await expect(this.productImage).toBeExisting();
        await browser.pause(1000)
    }

    open () {
        return super.open("inventory.html")
    }
}

export default new HomePage(); 