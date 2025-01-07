import { fixture, Selector, t, t as testcafe  } from "testcafe";
import  LoginPage  from '../pages/loginPage';
import  DashboardPage  from '../pages/dashboardPage';
import { selectByTag, selectByClassName } from "../utils/selectors";



const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

fixture`OrangeHRM Dashboard Tests`
    .page`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`
    .beforeEach(async t => {
        // Login before each test
        await loginPage.loginToApp('admin', 'admin123');
    });

test('Verify visibility, hover, and click functionality of all menu items', async t => {
    const menuItems = [
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

    for (const menuName of menuItems) {
        const menuSelector = selectByClassName('oxd-main-menu-item-wrapper').withText(menuName);

        // Verify the menu item is visible
        await testcafe.expect(menuSelector.visible).ok(`${menuName} menu is not visible`);

        // Hover over the menu item
        await testcafe.hover(menuSelector);

        // Click the menu item
        await testcafe.click(menuSelector);

        // Add additional assertions here if necessary
        // Example: Verify that the correct page loads
        const headerSelector = selectByClassName('oxd-topbar-header-breadcrumb h6').withText(menuName);
        await testcafe.expect(headerSelector.exists).ok(`Failed to navigate to ${menuName} page.`);
    }
});
    
        // Log success
        // console.log(`Verified ${menuName}: visible, hoverable, and clickable`);




