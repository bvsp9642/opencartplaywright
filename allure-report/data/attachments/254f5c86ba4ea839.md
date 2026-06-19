# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> user registration
- Location: tests\AccountRegistration.spec.ts:37:5

# Error details

```
ReferenceError: page is not defined
```

# Test source

```ts
  1  | /**
  2  |  * Test Case: Account Registration
  3  |  * 
  4  |  * Tags: @master @sanity @regression
  5  |  * 
  6  |  * Steps:
  7  |  * 1) Navigate to application URL 
  8  |  * 2) Go to 'My Account' and click 'Register'
  9  |  * 3) Fill in registration details with random data
  10 |  * 4) Agree to Privacy Policy and submit the form
  11 |  * 5) Validate the confirmation message
  12 |  */
  13 | 
  14 | import { test, expect } from '@playwright/test';
  15 | import { HomePage } from '../pages/HomePage';
  16 | import { RegistrationPage } from '../pages/RegistrationPage';
  17 | import { RandomDataUtil } from '../utils/randomDataGenerator';
  18 | import { TestConfig } from '../test.config';
  19 | 
  20 | let homepage:HomePage;
  21 | let registrationpage:RegistrationPage;
  22 | 
  23 | //hooks
  24 | test.beforeEach(async({page}) =>{
  25 |     const config = new TestConfig();
  26 |     await page.goto(config.appUrl);
  27 |     homepage = new HomePage(page);
  28 |     registrationpage = new RegistrationPage(page);
  29 | })
  30 | 
  31 | test.afterEach(async({page})=>{
  32 | 
  33 | await page.close();
  34 | 
  35 | })
  36 | 
  37 | test("user registration",async({})=>{
  38 | 
  39 |     //launch the page
  40 |   
  41 | 
  42 |     //2) Go to 'My Account' and click 'Register'
  43 |     await homepage.clickMyAccount();
  44 |     await homepage.clickRegister();
  45 |   
  46 |     await registrationpage.setFirstName( RandomDataUtil.getFirstName());
  47 |     await registrationpage.setLastName(RandomDataUtil.getlastName()); 
  48 |     await registrationpage.setEmail(RandomDataUtil.getEmail());
  49 |     await registrationpage.setTelephone(RandomDataUtil.getPhoneNumber());
  50 |     const password = RandomDataUtil.getPassword();
  51 |     console.log(password);
  52 |     await registrationpage.setPassword(password);
  53 | 
> 54 |      await page.waitForTimeout(5000);
     |      ^ ReferenceError: page is not defined
  55 |     await registrationpage.setConfirmPassword(password);
  56 |     await registrationpage.setPrivacyPolicy();
  57 |     await registrationpage.clickContinue();
  58 | 
  59 |     const confirmationmsg = await registrationpage.getConformationMsg();
  60 |     expect(confirmationmsg).toContain('Your Account Has Been Created');
  61 | 
  62 |     await page.waitForTimeout(5000);
  63 | 
  64 | 
  65 | })
  66 | 
  67 | 
```