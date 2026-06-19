# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> User login test @master @sanity @regression
- Location: tests\Login.spec.ts:71:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | /**
  2  |  * Test Case: Login with Valid Credentials
  3  |  * 
  4  |  * Tags: @master @sanity @regression
  5  |  * 
  6  |  * Steps:
  7  |  * 1) Navigate to the application URL
  8  |  * 2) Navigate to Login page via Home page
  9  |  * 3) Enter valid credentials and log in
  10 |  * 4) Verify successful login by checking 'My Account' page presence
  11 |  */
  12 | 
  13 | import { test, expect } from '@playwright/test';
  14 | import { HomePage } from '../pages/HomePage';
  15 | import { LoginPage } from '../pages/LoginPage';
  16 | import { MyAccountPage } from '../pages/MyAccountPage';
  17 | import { TestConfig } from '../test.config';
  18 | 
  19 | let config: TestConfig;
  20 | let homePage: HomePage;
  21 | let loginPage: LoginPage;
  22 | let myAccountPage: MyAccountPage;
  23 | 
  24 | // This hook runs before each test
  25 | test.beforeEach(async ({ page }) => {
  26 |   config = new TestConfig(); // Load config (URL, credentials)
  27 |   await page.goto(config.appUrl); // Navigate to base URL
  28 | 
  29 |   // Initialize page objects
  30 |   homePage = new HomePage(page);
  31 |   loginPage = new LoginPage(page);
  32 |   myAccountPage = new MyAccountPage(page);
  33 | });
  34 | 
  35 | // Optional cleanup after each test
  36 | test.afterEach(async ({ page }) => {
  37 |   await page.close(); // Close browser tab (good practice in local/dev run)
  38 | });
  39 | 
  40 | test("user login test", async({page})=>{
  41 | 
  42 |     await homePage.clickMyAccount();
  43 |     await homePage.clickLogin();
  44 |     await loginPage.login(config.email, config.password );
  45 |     const isLoggedIn = myAccountPage.isMyAccountPageExists();
  46 |     expect(isLoggedIn).toBeTruthy();
  47 | 
  48 | 
  49 | })
  50 | 
  51 | 
  52 | 
  53 | 
  54 | 
  55 | 
  56 | 
  57 | 
  58 | 
  59 | 
  60 | 
  61 | 
  62 | 
  63 | 
  64 | 
  65 | 
  66 | 
  67 | 
  68 | 
  69 | 
  70 | 
  71 | test('User login test @master @sanity @regression',async()=>{
  72 | 
  73 |     //Navigate to Login page via Home page
  74 | 
  75 |     await homePage.clickMyAccount();
  76 |     await homePage.clickLogin();
  77 | 
  78 |     //Enter valid credentials and log in
  79 |     await loginPage.setEmail(config.email);
  80 |     await loginPage.setPassword(config.password);
  81 |     await loginPage.clickLogin();
  82 | 
  83 |     //alternatevly
  84 |     //await loginPage.login(config.email,config.password);
  85 | 
  86 |     //Verify successful login by checking 'My Account' page presence
  87 |     const isLoggedIn=await myAccountPage.isMyAccountPageExists();
> 88 |     expect(isLoggedIn).toBeTruthy();
     |                        ^ Error: expect(received).toBeTruthy()
  89 | 
  90 | })
  91 | 
```