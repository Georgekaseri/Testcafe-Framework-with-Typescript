import { fixture, Selector, t as testcafe } from "testcafe";
import LoginPage from "../../../pages/login/loginPage";
import DashboardPage from "../../../pages/dashboard/dashboardPage";
import { config } from "../../../config";
import AddUserPage from "../../../pages/admin/userManagement/addUserPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const addUserPage = new AddUserPage();

fixture `User Management`
    .page(config.baseUrl)
    .beforeEach(async () => {
        await loginPage.loginToApp('admin', 'admin123');
        await dashboardPage.clickAdminMenu();
    });

test('Should Search Users', async testcafe => {
    await addUserPage.clickUserManagementDropdown();
    await addUserPage.clickUsersOption();
})