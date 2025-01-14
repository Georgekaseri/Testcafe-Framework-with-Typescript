import { Selector, t, test, t as testcafe } from 'testcafe';
import { selectByAttribute, selectByClassName, selectByTag, selectByTestId, selectByText } from '../../utils/selectors';

 class DashboardPage {
    clickAdminMenu = async () => {
        const adminMenu = selectByTag('span').withText('Admin');
        await testcafe.click(adminMenu);
    };

    clickPIMMenu = async () => {
        const pimMenu = selectByText('PIM');
        await testcafe.click(pimMenu);
    };

    clickLeaveMenu = async () => {
        const leaveMenu = selectByText('Leave');
        await testcafe.click(leaveMenu);
    };

    clickTimeMenu = async () => {
        const timeMenu = selectByText('Time');
        await testcafe.click(timeMenu);
    };

    clickRecruitmentMenu = async () => {
        const recruitmentMenu = selectByText('Recruitment');
        await testcafe.click(recruitmentMenu);
    };

    clickMyInfoMenu = async () => {
        const myInfoMenu = selectByText('My Info');
        await testcafe.click(myInfoMenu);
    };

    clickPerformanceMenu = async () => {
        const performanceMenu = selectByText('Performance');
        await testcafe.click(performanceMenu);
    };

    clickDashboardMenu = async () => {
        const dashboardMenu = selectByText('Dashboard');
        await testcafe.click(dashboardMenu);
    };

    clickDirectoryMenu = async () => {
        const directoryMenu = selectByText('Directory');
        await testcafe.click(directoryMenu);
    };

    clickMaintenanceMenu = async () => {
        const maintenanceMenu = selectByText('Maintenance');
        await testcafe.click(maintenanceMenu);
    };

    clickClaimMenu = async () => {
        const claimMenu = selectByText('Claim');
        await testcafe.click(claimMenu);
    };

    clickBuzzMenu = async () => {
        const buzzMenu = selectByText('Buzz');
        await testcafe.click(buzzMenu);
    };

    navigateToSection = async (menuName: string) => {
        const menu = selectByText(menuName);
        await testcafe.click(menu);
    };

    tabSelector = Selector('.oxd-main-menu');

    verifyTabItems = async (tabMenus: string[]) => {
    for (const tabMenu of tabMenus) {
        // Adjust selector based on the HTML structure
        const tabMenuSelector = this.tabSelector
        .find('li')
        .find('a.oxd-main-menu-item') // Locate the <a> tag
        .withText(tabMenu); // Match the text for the menu item
    

        // Check if the tab menu exists
        if (!(await tabMenuSelector.exists)) {
            console.error(`"${tabMenu}" menu item does not exist.`);
            continue;
        }

        // Wait for the menu to become visible
        await testcafe
            .expect(tabMenuSelector.visible)
            .ok(`"${tabMenu}" menu item is not visible.`, { timeout: 5000 });

        // Hover and click the tab menu
        await testcafe.hover(tabMenuSelector);
        await testcafe.click(tabMenuSelector);

        // console.log(`Successfully interacted with "${tabMenu}"`);
    }
};    
}
export default DashboardPage;
