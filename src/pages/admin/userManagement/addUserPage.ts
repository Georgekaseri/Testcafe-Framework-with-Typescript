import {t as testcafe} from 'testcafe';
import { selectByClassName, selectByAttribute, selectByText, selectByTagAndAttribute } from '../../../utils/selectors';

class AddUserPage {
    clickUserManagementDropdown = async (): Promise<void> => {
        const dropdown = selectByClassName('oxd-topbar-body-nav-tab.--parent.--visited');
        await testcafe.click(dropdown);
    };

    clickUsersOption = async (): Promise<void> => {
        // Using selectByClassName for the `ul` element
        const dropdownMenu = selectByClassName('oxd-dropdown-menu');
        const usersOption = dropdownMenu.find('li').withText('Users'); // Find 'li' with specific text under the dropdown
        
        // Click the Users option
        await testcafe.click(usersOption);
    };

    enterUsername = async (userInput: string) => {
        const usernameInput = selectByTagAndAttribute('input', 'placeholder', 'Username');
        await testcafe.typeText(usernameInput, userInput, { replace: true });
    };

    selectUserRole = async (role: string) => {
        const userRoleDropdown = selectByAttribute('name', 'userRole');
        await testcafe.click(userRoleDropdown);
        const roleOption = selectByText('option', role);
        await testcafe.click(roleOption);
    };

    enterEmployeeName = async (employeeName: string) => {
        const employeeNameInput = selectByAttribute('placeholder', 'Type for hints...');
        await testcafe.typeText(employeeNameInput, employeeName, { replace: true });
    };

    selectStatus = async (status: string) => {
        const statusDropdown = selectByAttribute('name', 'status');
        await testcafe.click(statusDropdown);
        const statusOption = selectByText('option', status);
        await testcafe.click(statusOption);
    };

    clickSearchButton = async () => {
        const searchButton = selectByText('button', 'Search');
        await testcafe.click(searchButton);
    };

    clickResetButton = async () => {
        const resetButton = selectByText('button', 'Reset');
        await testcafe.click(resetButton);
    };
}
export default AddUserPage