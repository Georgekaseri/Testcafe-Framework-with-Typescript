import { fixture, Selector, t, t as testcafe  } from "testcafe";
import LoginPage from "../../pages/login/loginPage";
import  DashboardPage  from '../../pages/dashboard/dashboardPage';
import { config } from "../../config";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

fixture`OrangeHRM Dashboard Tests`
    .page(config.baseUrl)
    .beforeEach(async testcafe => {
        await loginPage.loginToApp('admin', 'admin123');
    });

test('Verify visibility, hover, and click functionality of all menu items', async testcafe => {
    const tabMenuItems = [
        'Admin',
        'PIM',
        'Leave',
        'Time',
        'Recruitment',
        'My Info',
        'Performance',
        'Dashboard',
        'Directory',
        'Maintenance',
        'Claim',
        'Buzz'
    ];
    await dashboardPage.verifyTabItems(tabMenuItems);
});



