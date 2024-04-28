import { Page, expect } from "playwright/test";
import { HelperBase } from "./helperBase";

export class HomePage extends HelperBase{
    
    
    
    constructor(page: Page) {
        super(page)

    }
    async gotoHomePage(url: string) {           
        await this.page.goto(url)
    }
    
    
    async verifyHomePage() {       
        const title = await this.page.title();
        console.log("Sayfa Başlığı:", title);
        await expect(this.page).toHaveTitle(/Automation Exercise/);

    }
}