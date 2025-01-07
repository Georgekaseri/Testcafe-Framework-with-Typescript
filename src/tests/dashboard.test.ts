import { fixture, Selector, t, t as testcafe  } from "testcafe";
import  LoginPage  from '../pages/loginPage';
import  DashboardPage  from '../pages/dashboardPage';
import { selectByTag, selectByClassName } from "../utils/selectors";
import { config } from "../config";



const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

fixture`OrangeHRM Dashboard Tests`
    .page(config.baseUrl)
    .beforeEach(async testcafe => {
        await loginPage.loginToApp('admin', 'admin123');
    });

test('Verify visibility, hover, and click functionality of all menu items', async t => {
    const menuItems = [
        'Admin',
        'PIM',
        // 'Leave',
        // 'Time',
        // 'Recruitment',
        // 'My Info',
        // 'Performance',
        // 'Dashboard',
        // 'Directory',
        // 'Maintenance',
        // 'Claim',
        // 'Buzz'
    ];

    for (const menuName of menuItems) {
        const menuSelector = selectByClassName('oxd-main-menu-item-wrapper').withText(menuName);
        await testcafe.expect(menuSelector.visible).ok(`${menuName} menu is not visible`);
        await testcafe.hover(menuSelector);
        await testcafe.click(menuSelector);
        const headerSelector = selectByClassName('oxd-topbar-header-breadcrumb h6').withText(menuName);
        await testcafe.expect(headerSelector.exists).ok(`Failed to navigate to ${menuName} page.`);
    }
});



