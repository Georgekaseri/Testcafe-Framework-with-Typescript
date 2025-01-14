import { t, t as testcafe } from 'testcafe';
import { selectByTag,selectByAttribute } from '../../utils/selectors';


 class LoginPage {
    enterUsername = async (username: string) => {
      const usernameInput = selectByAttribute('name', 'username');
      await testcafe.typeText(usernameInput, username, { replace: true });
    };
  
    enterPassword = async (password: string) => {
      const passwordInput = selectByAttribute('name', 'password');
      await testcafe.typeText(passwordInput, password, { replace: true });
    };
  
    clickLoginButton = async () => {
      const loginButton = selectByAttribute('type', 'submit');
      await testcafe.click(loginButton);
    };
  
    getErrorMessage = async (): Promise<string> => {
        const errorMessage = selectByTag('p');
        return await errorMessage.innerText;
    };
  
    loginToApp = async (username: string, password: string) => {
      await this.enterUsername(username);
      await this.enterPassword(password);
      await this.clickLoginButton();
    };
  }
export default LoginPage;