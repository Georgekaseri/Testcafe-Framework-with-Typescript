import { t, t as testcafe } from 'testcafe';
import { selectByAttribute, selectByClassName, selectByTag, selectByTestId, selectByText } from '../utils/selectors';

 class NavbarPage {

    isDashboardTextVisible = async (): Promise<boolean> => {
        const dashboardText = selectByText('Dashboard');
        return await dashboardText.with({timeout: 5000}).visible;
    };

    clickUpgradeButton = async () =>{
        const upgradeButton = selectByText('Upgrade');
        await testcafe.click(upgradeButton);
    };

    clickProfileDropdown = async () =>{
        const profileDropdown = selectByClassName('oxd-userdropdown-tab');
        await testcafe.click(profileDropdown);
    }

    isUpgradeButtonVisible = async (): Promise<boolean> => {
        const upgradeButton = selectByText('Upgrade');
        return await upgradeButton.with({ timeout: 5000 }).visible;
    }
    isProfileDropdownVisible = async (): Promise<boolean> => {
        const profileDropdown = selectByClassName('oxd-userdropdown-tab');
        return await profileDropdown.visible;
    };

    }


export default NavbarPage;
