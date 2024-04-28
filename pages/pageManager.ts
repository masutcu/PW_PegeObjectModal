import { Page} from "playwright/test";
import {NavigationPage} from '../pages/navigationPage'
import { LoginPage } from "./loginpage";
import { HomePage } from "./homePage";



export class PageManager{
    private readonly page:Page
    private readonly navigationPage:NavigationPage
    private readonly loginPage:LoginPage
    private readonly homePage:HomePage
    

    constructor(page:Page) {
        this.page=page;
        this.navigationPage=new NavigationPage(this.page)
        this.loginPage=new LoginPage(this.page)
        this.homePage=new HomePage(this.page)

        

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

    

}