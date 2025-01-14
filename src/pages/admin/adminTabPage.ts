import { Selector, t as testcafe } from "testcafe";


class AdminTabPage {
    navSelector = Selector('nav.oxd-topbar-body-nav'); 

    verifyMenuItems = async (menuItems: string[]) => {
        for (const menuName of menuItems) {
            // Selector for `a` or `span` based on the menu name
            const menuSelector = this.navSelector
                .find('li')
                .find('a, span') // Handles both <a> and <span>
                .withText(menuName);

            // Validate menu item existence
            if (!(await menuSelector.exists)) {
                console.error(`"${menuName}" menu item does not exist.`);
                continue;
            }

            await testcafe
                .expect(menuSelector.visible)
                .ok(`${menuName} menu item is not visible`);

            // Hover and click the menu item
            await testcafe.hover(menuSelector);
            await testcafe.click(menuSelector);
            // console.log(`Successfully interacted with "${menuName}"`);
        }
    };
}

export default AdminTabPage;