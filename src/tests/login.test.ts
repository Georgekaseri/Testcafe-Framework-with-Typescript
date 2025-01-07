import { fixture, Selector, t, t as testcafe  } from "testcafe";
import  LoginPage  from "../pages/loginPage";
import  NavbarPage from '../pages/navbarPage';

const loginPage = new LoginPage
const navbarPage = new NavbarPage

fixture `Login Test`
    .page `https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`

test('Should user login to App', async () =>{
    await loginPage.loginToApp('Admin', 'admin123')
    await testcafe.expect(navbarPage.isDashboardTextVisible).ok();
})

test('Login with Invalid Credentials', async () => {
    await loginPage.loginToApp('invalid', 'admin123');
    const errorMessage = await loginPage.getErrorMessage();
    await testcafe.expect(errorMessage).contains('Invalid credentials');
});
