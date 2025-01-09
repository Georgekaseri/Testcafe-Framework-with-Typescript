import { t, t as testcafe } from 'testcafe';
import { selectByAttribute, selectByClassName, selectByTag, selectByTestId, selectByText } from '../utils/selectors';

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
}
export default DashboardPage;
