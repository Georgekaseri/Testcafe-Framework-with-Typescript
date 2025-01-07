import { fixture, Selector, t, t as testcafe  } from "testcafe";
import  LoginPage  from '../pages/loginPage';
import  NavbarPage from "../pages/navbarPage";

const loginPage = new LoginPage();
const navbarPage = new NavbarPage();

fixture`OrangeHRM Dashboard Tests`
    .page`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`
    .beforeEach(async t => {
        await loginPage.loginToApp('admin', 'admin123');
    });

test('Verify Dashboard text, Upgrade button, and Profile dropdown visibility', async () =>{
    await testcafe.expect(await navbarPage.isDashboardTextVisible).ok()
    await testcafe.expect(await navbarPage.isUpgradeButtonVisible()).ok();
    await testcafe.expect(await navbarPage.isProfileDropdownVisible()).ok();
    await navbarPage.clickUpgradeButton();
    await navbarPage.clickProfileDropdown();

});
