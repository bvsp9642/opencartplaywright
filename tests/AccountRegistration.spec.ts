/**
 * Test Case: Account Registration
 *
 * Tags: @master @sanity @regression
 *
 * Steps:
 * 1) Navigate to application URL
 * 2) Go to 'My Account' and click 'Register'
 * 3) Fill in registration details with random data
 * 4) Agree to Privacy Policy and submit the form
 * 5) Validate the confirmation message
 */

import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { RegistrationPage } from "../pages/RegistrationPage";
import { RandomDataUtil } from "../utils/randomDataGenerator";
import { TestConfig } from "../test.config";

let homepage: HomePage;
let registrationpage: RegistrationPage;
let config: TestConfig;

//hooks
test.beforeEach(async ({ page }) => {
  const config = new TestConfig();
  await page.goto(config.appUrl);
  homepage = new HomePage(page);
  registrationpage = new RegistrationPage(page);
});

test.afterEach(async ({ page }) => {
  await page.waitForTimeout(5000);
  await page.close();
});

test("user registration test @master @sanity @regression", async ({}) => {
  //launch the page

  //2) Go to 'My Account' and click 'Register'
  await homepage.clickMyAccount();
  await homepage.clickRegister();

  await registrationpage.setFirstName(RandomDataUtil.getFirstName());
  await registrationpage.setLastName(RandomDataUtil.getlastName());
  await registrationpage.setEmail(RandomDataUtil.getEmail());
  await registrationpage.setTelephone(RandomDataUtil.getPhoneNumber());
  const password = RandomDataUtil.getPassword();
  console.log(password);
  await registrationpage.setPassword(password);

  //await page.waitForTimeout(5000);
  await registrationpage.setConfirmPassword(password);
  await registrationpage.setPrivacyPolicy();
  await registrationpage.clickContinue();

  const confirmationmsg = await registrationpage.getConformationMsg();
  expect(confirmationmsg).toContain("Your Account Has Been Created");

  //await page.waitForTimeout(5000);
});
