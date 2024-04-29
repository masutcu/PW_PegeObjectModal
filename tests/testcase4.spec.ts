import { test, expect } from '@playwright/test'
import { PageManager } from '../pages/pageManager'  


//Test Case 4: Logout User
//1. Launch browser
//2. Navigate to url 'http://automationexercise.com'
//3. Verify that home page is visible successfully
//4. Click on 'Signup / Login' button
//5. Verify 'Login to your account' is visible
//6. Enter correct email address and password
//7. Click 'login' button
//8. Verify that 'Logged in as username' is visible
//9. Click 'Logout' button
//10. Verify that user is navigated to login page


test.describe('Test Case 4', () => {  
    test('Logout User', async ({page}) => {
    
        const pm = new PageManager(page) 
        await pm.onHomePage().gotoHomePage("http://automationexercise.com")
        await pm.onHomePage().verifyHomePage()
        await pm.navigateTo().signupLoginPage()
        await expect(page.getByRole('heading', { name: "Login to your account" })).toBeVisible()
        await pm.onLoginPage().fillLoginForm("JulianSUTCU148@test.com","Istanbul1453")
        await pm.onLoginPage().verifyLoginPage("Julian SUTCU")
        await pm.onLoginPage().logoutPage()     

    })
})

