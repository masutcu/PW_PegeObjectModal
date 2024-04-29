import {  Page } from "playwright/test";
import { HelperBase } from "./helperBase";

/*burada bir constructor oluşturduk. Constructor bu class içine bir page parametresinin aktarılmasını bekliyor. page playwright dan gelen fixture ve bu parametreyi bu sınıfla ilgili yerel alana atarız. Ve bu sayfada bir anahtar kelime kullanıyoruz. Bu, yalnızca bu belirli sınıfa (ki bu sınıfa) ilişkin bir alanı veya değişkeni veya özelliği kullanmak istediğimiz anlamına gelir.*/
export class NavigationPage extends HelperBase {
    

    constructor(page: Page) {
        super(page) //extends olduğu için         
  
    }

    async productsPage() {
        await this.page.getByRole('link', { name: 'Products' }).click()
        await this.bekle(2)
    }

    async cartPage() {
        await this.page.getByRole('link', { name: 'Cart' }).click()
        await this.bekle(2)
    }
    async signupLoginPage() {     
        await this.page.getByRole('link', { name: ' Signup / Login' }).click()
        await this.bekle(2)
    }
    async testCasesPage() {
        await this.page.getByRole('link', { name: ' Test Cases' }).click()
        await this.bekle(2)
    }
    async contactUsPage() {
        await this.page.getByRole('link', { name: ' Contact us' }).click()
        await this.bekle(2)
    }
  
    /*Gezinme sayfasına daha fazla yeniden kullanılabilir yöntem ekledik. Bu yöntemleri, ana menünün durumu ne olursa olsun, menümüz içindeki herhangi bir sayfayı seçebilecek kadar akıllı hale getirdik. Genişledi mi yoksa daraltıldı mı? Böylece ana menünün durumunu kontrol edecek dahili bir yöntem oluşturduk. Genişletilmiş mi yoksa daraltılmış mı? Ve sonra duruma bağlı olarak ya bu menü öğesine tıklanır ya da bu öğeyi atlayıp menüden gerçek öğeyi seçeriz ve ardından test uygulamasında sayfalar arasında gezinmek için sayfa nesnesi yöntemlerimizi başarıyla çağırabiliriz.*/

}