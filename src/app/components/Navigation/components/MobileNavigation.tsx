'use client';

import { HOME_PAGE } from '@/app/contants/routes';
import { useState } from 'react';
import Portal from '../../Portal/Portal';
import SideDrawer from '../../SideDrawer/SideDrawer';
import NavLink from './NavLink';
import ToggleNavButton from './ToggleNavButton';

export default function MobileNavigation() {
	const [isSideDrawerOpened, setisSideDrawerOpened] = useState(false);

	const handleToggleSideDrawer = () => {
		setisSideDrawerOpened((value) => !value);
	};

	const handleCloseSideDrawer = () => {
		setisSideDrawerOpened(false);
	};

	return (
		<nav className='flex justify-between items-center md:hidden py-4'>
			<NavLink route={HOME_PAGE} displayText='Logo' />
			<ToggleNavButton handleSideDrawerToggle={handleToggleSideDrawer} />

			<Portal isInitialized={isSideDrawerOpened} handleSetIsInitialized={handleCloseSideDrawer}>
				<SideDrawer isOpened={isSideDrawerOpened} closeSideDrawer={handleCloseSideDrawer} />
			</Portal>
		</nav>
	);
}
