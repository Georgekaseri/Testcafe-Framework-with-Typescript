import { fixture, Selector, t, t as testcafe  } from "testcafe";
import LoginPage from "../../pages/login/loginPage";
import { config } from "../../config";

const loginPage = new LoginPage


fixture `Login Test`
.page(config.baseUrl);

test('Should user login to App', async () =>{
    await loginPage.loginToApp('Admin', 'admin123')
})

test('Login with Invalid Credentials', async () => {
    await loginPage.loginToApp('invalid', 'admin123');
    const errorMessage = await loginPage.getErrorMessage();
    await testcafe.expect(errorMessage).contains('Invalid credentials');
});
