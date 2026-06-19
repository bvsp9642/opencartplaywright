# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> user registration
- Location: tests\AccountRegistration.spec.ts:20:5

# Error details

```
Error: locator.textContent: Target page, context or browser has been closed
Call log:
  - waiting for locator('h1:has-text("Your Account Has Been Created!")')

```

# Test source

```ts
  1   | import{test, expect, Page, Locator} from "@playwright/test";
  2   | import strict from "node:assert/strict";
  3   | 
  4   | export class RegistrationPage{
  5   | 
  6   |     private page:Page;
  7   | 
  8   |     //locatos using css selectors
  9   |     private readonly txtFirstname:Locator;
  10  |     private readonly txtLastname:Locator;
  11  |     private readonly txtEmail:Locator;
  12  |     private readonly txtTelephone:Locator;
  13  |     private readonly txtPassword:Locator;
  14  |     private readonly txtConfirmPassword:Locator;
  15  |     private readonly chkdPolicy:Locator;
  16  |     private readonly btnContinue:Locator;
  17  |     private readonly msgConfirmation:Locator;
  18  | 
  19  |     //initialising instance variables
  20  | 
  21  |     constructor(page:Page){
  22  | 
  23  |         this.page = page;
  24  |         this.txtFirstname = page.locator('#input-firstname');
  25  |         this.txtLastname = page.locator('#input-lastname');
  26  |         this.txtEmail = page.locator('#input-email');
  27  |         this.txtTelephone = page.locator('#input-telephone');
  28  |         this.txtPassword = page.locator("#input-password");
  29  |         this.txtConfirmPassword = page.locator('#input-confirm');
  30  |         this.chkdPolicy = page.locator('input[name="agree"]');
  31  |         this.btnContinue = page.locator("input[value='Continue']");
  32  |         this.msgConfirmation = page.locator('h1:has-text("Your Account Has Been Created!")');
  33  | 
  34  |     }
  35  | 
  36  |     //Methods
  37  | 
  38  |  /*    sets the first name in the registration form
  39  |     @param fname - First Name to enter */
  40  |     async setFirstName(fname:string):Promise<void>{
  41  | 
  42  |         await this.txtFirstname.fill(fname);
  43  |     }
  44  | 
  45  | /*    sets the last name in the registration form
  46  |     @param lname - Last Name to enter */
  47  |     async setLastName(lname:string):Promise<void>{
  48  | 
  49  |         await this.txtLastname.fill(lname);
  50  |     }
  51  | 
  52  | /*    sets the Emaid id in the registration form
  53  |     @param email - Email to enter */
  54  |     async setEmail(email:string):Promise<void>{
  55  | 
  56  |         await this.txtEmail.fill(email);
  57  |     }
  58  | 
  59  | /*    sets the Telephone in the registration form
  60  |     @param telephone- telephone to enter */
  61  |     async setTelephone(tel:string):Promise<void>{
  62  | 
  63  |         await this.txtTelephone.fill(tel);
  64  |     }
  65  | 
  66  | /*    sets the password in the registration form
  67  |     @param password- password to enter */
  68  |     async setPassword(pwd:string):Promise<void>{
  69  |         console.log("inside pwd", pwd);
  70  |         await this.txtTelephone.fill(pwd);
  71  |     }
  72  | 
  73  | /*    sets the confirm password in the registration form
  74  |     @param confirm password- confirm password to enter */
  75  |     async setConfirmPassword(pwd:string):Promise<void>{
  76  | 
  77  |         await this.txtConfirmPassword.fill(pwd);
  78  |     }
  79  | 
  80  | /*    sets the privacy policy in the registration form
  81  |     @param privacy policy- set privacy policy */
  82  |     async setPrivacyPolicy():Promise<void>{
  83  | 
  84  |         await this.chkdPolicy.check();
  85  |     
  86  |     }
  87  | 
  88  | //click on continue button
  89  |     async clickContinue():Promise<void>{
  90  | 
  91  |         await this.btnContinue.click();
  92  |     
  93  |     }
  94  | //get confirmation
  95  | 
  96  | async getConformationMsg():Promise<string>{
  97  | 
> 98  |     return await this.msgConfirmation.textContent() ?? '';
      |                                       ^ Error: locator.textContent: Target page, context or browser has been closed
  99  | }
  100 | 
  101 | //complete registration flow
  102 | 
  103 | async completeRegistration(userData:{
  104 | 
  105 |     firstName:string;
  106 |     lastName:string;
  107 |     email:string;
  108 |     telephone:string;
  109 |     password:strict
  110 | }):Promise<void>{
  111 | 
  112 |     await this.setFirstName(userData.firstName);
  113 |     await this.setLastName(userData.lastName);
  114 |     await this.setEmail(userData.email);
  115 |     await this.setPassword(userData.password)
  116 |     await this.setConfirmPassword(userData.password)
  117 |     await this.setPrivacyPolicy();
  118 |     await this.clickContinue();
  119 |     await expect(this.msgConfirmation).toBeVisible();
  120 | 
  121 | }
  122 | }
```