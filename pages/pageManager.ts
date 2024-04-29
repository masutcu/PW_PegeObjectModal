import { Page} from "playwright/test";
import {NavigationPage} from '../pages/navigationPage'
import { LoginPage } from "./loginpage";
import { HomePage } from "./homePage";
import { SignUpDetailFormPage } from "./signUpDetailFormPage";



export class PageManager{
    private readonly page:Page
    private readonly navigationPage:NavigationPage
    private readonly loginPage:LoginPage
    private readonly homePage:HomePage
    private readonly signUpDetailFormPage:SignUpDetailFormPage
    

    constructor(page:Page) {
        this.page=page;
        this.navigationPage=new NavigationPage(this.page)
        this.loginPage=new LoginPage(this.page)
        this.homePage=new HomePage(this.page)
        this.signUpDetailFormPage=new SignUpDetailFormPage(this.page)

        

    }
    navigateTo(){
        return this.navigationPage
    }
    onLoginPage(){
        return this.loginPage
    }
    onHomePage(){
        return this.homePage
    }
    onSignUpDetailFormPage(){
        return this.signUpDetailFormPage
    }

    

}