import { Page, expect } from "playwright/test";
import { HelperBase } from "./helperBase";

export class SignUpDetailFormPage extends HelperBase{
    
    
    
    constructor(page: Page) {
        super(page)

    }
    
    async fillAllSignUpDetail() {       
        let loginForm = this.page.locator('.login-form')
        //radio button
        await loginForm.getByRole('radio', { name: 'Mr.' }).first().check()
        //password alanı dolduruyoruz
        await loginForm.getByRole('textbox', { name: "Password" }).pressSequentially("Istanbul1453", { delay: 100 })

            //dropdown
        const days = loginForm.locator('#days')
        await days.selectOption('13')
        const month = loginForm.locator('#months')
        await month.selectOption('August')
        const year = loginForm.locator('#years')
        await year.selectOption('1990')
        await this.page.getByRole('checkbox', { name: "newsletter" }).click()  
        await this.page.locator("#optin").click()
        
        //12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
        await loginForm.locator('#first_name').fill('Test')
        await loginForm.locator('#last_name').fill('BySUTCU')
        await loginForm.locator('#company').fill('IBM')
        await loginForm.locator('#address1').fill('Rose Strret')
        await loginForm.locator('#address2').fill('California')

        //country dropdown
        const country = loginForm.locator('#country')
        await country.selectOption('United States')
        await loginForm.locator('#state').fill('California')
        await loginForm.locator('#city').fill('San Francisco')
        await loginForm.locator('#zipcode').fill('94102')
        await loginForm.locator('#mobile_number').fill('+1 415-239-5065')
        await this.page.getByRole('button', { name: 'Create Account' }).click()    

    }
}