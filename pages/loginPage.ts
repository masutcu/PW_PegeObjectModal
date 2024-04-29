import { Locator, Page, expect } from "playwright/test";
import { HelperBase } from "./helperBase";

export class LoginPage extends HelperBase{
    
    
    
    constructor(page: Page) {
        super(page)

    }
    async fillLoginForm(email: string, password: string) {

        const loginForm = this.page.locator('.login-form').first()       
        await loginForm.getByPlaceholder('Email Address').pressSequentially(email, { delay: 100 })
        await loginForm.getByPlaceholder('Password').fill(password)
        await loginForm.getByRole('button', { name: 'Login' }).click()
        

    }
    
    
    async fillSignUpForm(name: string, email: string) {
        const signUpForm = this.page.locator('.signup-form').first()       
        await signUpForm.getByPlaceholder('Name').pressSequentially(name, { delay: 100 })
        await signUpForm.getByPlaceholder('Email Address').fill(email)
        await signUpForm.getByRole('button', { name: 'Signup' }).click()

    }
    async verifyLoginPage(fullName:string) {
               
        await expect(this.page.getByText(' Logged in as ')).toBeVisible
        await expect(this.page.getByText(fullName)).toBeVisible

    }
    async logoutPage() {
               
        await this.page.getByRole('link', { name: ' Logout' }).click()
        await expect(this.page).toHaveTitle(/Login/)

    }
}