import Page from "./page";
import { $ } from '@wdio/globals'

class CartPage extends Page {

    //Define All element on the page
    // get checkoutButton () {}
    // get continueShoppingButton() {}

    // open() {
    //     return super.open("cart.html")
    // }
    get pageTitle() {
        return $('.title');
    }

    get firstItemAddToCartButton() {
        return $('button[name="add-to-cart-sauce-labs-backpack"]');
    }
    get shoppingCartBadge() {
        return $('.shopping_cart_badge');
    }

    //CLASS METHOD/ FUNCTION 

    //menambahkan item pertama ke keranjang
    async addItemToCart() {
        await this.firstItemAddToCartButton.click();
        await browser.pause(1000)
    }


    // memverifikasi jumlah item dalam keranjang
    async validateCartItemCount(expectedCount) {
        const itemCount = await this.shoppingCartBadge.getText();
        expect(itemCount).toBe(expectedCount);
        await browser.pause(1000)
    }

    //memeriksa bahwa pengguna berada di halaman produk setelah login.
    async validateDashboardPage() {
        const titleText = await this.pageTitle.getText();
        expect(titleText).toBe('PRODUCTS');
        await browser.pause(1000)
    }
     open() {
        return super.open("cart.html")
    }
}

export default new CartPage();
