import { fixture, Selector, t } from "testcafe";
import LoginPage from "../../pages/login/loginPage";
import { config } from "../../config";
import DashboardPage from "../../pages/dashboard/dashboardPage";
import AdminTabPage from "../../pages/admin/adminTabPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const adminTabPage = new AdminTabPage();

fixture `Admin Tabs`
    .page(config.baseUrl)
    .beforeEach(async () => {
        await loginPage.loginToApp('admin', 'admin123');
    });

test('Verify Admin tabs functionalities', async testcafe => {
    await dashboardPage.clickAdminMenu();

    const menuItems = [
        'User Management',
        'Job',
        'Organization',
        'Qualifications',
        'Nationalities',
        'Corporate Branding',
    ];

    await adminTabPage.verifyMenuItems(menuItems);
});