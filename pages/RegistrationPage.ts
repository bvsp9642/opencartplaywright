import{test, expect, Page, Locator} from "@playwright/test";
//import strict from "node:assert/strict";

export class RegistrationPage{

    private page:Page;

    //locatos using css selectors
    private readonly txtFirstname:Locator;
    private readonly txtLastname:Locator;
    private readonly txtEmail:Locator;
    private readonly txtTelephone:Locator;
    private readonly txtPassword:Locator;
    private readonly txtConfirmPassword:Locator;
    private readonly chkdPolicy:Locator;
    private readonly btnContinue:Locator;
    private readonly msgConfirmation:Locator;

    //initialising instance variables

    constructor(page:Page){

        this.page = page;
        this.txtFirstname = page.locator('#input-firstname');
        this.txtLastname = page.locator('#input-lastname');
        this.txtEmail = page.locator('#input-email');
        this.txtTelephone = page.locator('#input-telephone');
        this.txtPassword = page.locator("#input-password");
        this.txtConfirmPassword = page.locator('#input-confirm');
        this.chkdPolicy = page.locator('input[name="agree"]');
        this.btnContinue = page.locator("input[value='Continue']");
        this.msgConfirmation = page.locator('h1:has-text("Your Account Has Been Created!")');

    }

    //Methods

 /*    sets the first name in the registration form
    @param fname - First Name to enter */
    async setFirstName(fname:string):Promise<void>{

        await this.txtFirstname.fill(fname);
    }

/*    sets the last name in the registration form
    @param lname - Last Name to enter */
    async setLastName(lname:string):Promise<void>{

        await this.txtLastname.fill(lname);
    }

/*    sets the Emaid id in the registration form
    @param email - Email to enter */
    async setEmail(email:string):Promise<void>{

        await this.txtEmail.fill(email);
    }

/*    sets the Telephone in the registration form
    @param telephone- telephone to enter */
    async setTelephone(tel:string):Promise<void>{

        await this.txtTelephone.fill(tel);
    }

/*    sets the password in the registration form
    @param password- password to enter */
    async setPassword(pwd:string):Promise<void>{
        //console.log("inside pwd", pwd);
        await this.txtPassword.fill(pwd);
    }

/*    sets the confirm password in the registration form
    @param confirm password- confirm password to enter */
    async setConfirmPassword(pwd:string):Promise<void>{

        await this.txtConfirmPassword.fill(pwd);
    }

/*    sets the privacy policy in the registration form
    @param privacy policy- set privacy policy */
    async setPrivacyPolicy():Promise<void>{

        await this.chkdPolicy.check();
    
    }

//click on continue button
    async clickContinue():Promise<void>{

        await this.btnContinue.click();
    
    }
//get confirmation

async getConformationMsg():Promise<string>{

    return await this.msgConfirmation.textContent() ?? '';
}

//complete registration flow

async completeRegistration(userData:{

    firstName:string;
    lastName:string;
    email:string;
    telephone:string;
    password:string;
}):Promise<void>{

    await this.setFirstName(userData.firstName);
    await this.setLastName(userData.lastName);
    await this.setEmail(userData.email);
    await this.setPassword(userData.password)
    await this.setConfirmPassword(userData.password)
    await this.setPrivacyPolicy();
    await this.clickContinue();
    await expect(this.msgConfirmation).toBeVisible();

}
}