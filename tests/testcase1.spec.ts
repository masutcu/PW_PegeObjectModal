import { test, expect } from '@playwright/test'
import { PageManager } from '../pages/pageManager'  
import { faker } from '@faker-js/faker'


//Test Case 1: Register User
//1. Launch browser
//2. Navigate to url 'http://automationexercise.com'
//3. Verify that home page is visible successfully
//4. Click on 'Signup / Login' button
//5. Verify 'New User Signup!' is visible
//6. Enter name and email address
//7. Click 'Signup' button
//8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
//9. Fill details: Title, Name, Email, Password, Date of birth
//10. Select checkbox 'Sign up for our newsletter!'
//11. Select checkbox 'Receive special offers from our partners!'
//12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
//13. Click 'Create Account button'
//14. Verify that 'ACCOUNT CREATED!' is visible
//15. Click 'Continue' button
//16. Verify that 'Logged in as username' is visible
//17. Click 'Delete Account' button
//18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button


test.describe('Test Case 1', () => {  
    test('Register User', async ({page}) => {
    
        const pm = new PageManager(page)
        const name="Test BySUTCU"
        const randomEmail= `${name.replace(' ', '')}${faker.number.int(1000)}@test.com`
        
        console.log(process.env.STATE)
                       
        await pm.onHomePage().gotoHomePage()
        await pm.onHomePage().verifyHomePage()
        await pm.navigateTo().signupLoginPage()
        await expect(page.getByRole('heading', { name: "New User Signup!" })).toBeVisible()
        await pm.onLoginPage().fillSignUpForm(name, randomEmail )
        await expect(page.getByRole('heading', { name: 'Account Information' })).toBeVisible()
        await pm.onSignUpDetailFormPage().fillAllSignUpDetail()
        await expect(page.getByRole('heading', { name: "Account Created!" })).toBeVisible()
        await page.getByRole('link', { name: 'Continue' }).click()
        await pm.onLoginPage().verifyLoginPage(name)
        await pm.onHomePage().deleteAccountAndVerify() 

    })
})

