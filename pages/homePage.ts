import { Page, expect } from "playwright/test";
import { HelperBase } from "./helperBase";

export class HomePage extends HelperBase{
    
    
    
    constructor(page: Page) {
        super(page)

    }
    async gotoHomePage() {           
        await this.page.goto("/")
    }
    
    
    async verifyHomePage() {       
        const title = await this.page.title();
        console.log("Sayfa Başlığı:", title);
        await expect(this.page).toHaveTitle(/Automation Exercise/);

    }
    async deleteAccountAndVerify() {           
        await this.page.getByRole('link', { name: 'Delete Account' }).click()
        await expect(this.page.getByRole('heading', { name: "Account Deleted!" })).toBeVisible()
    }
}