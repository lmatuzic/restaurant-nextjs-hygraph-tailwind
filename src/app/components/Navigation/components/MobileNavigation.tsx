'use client';

import { HOME_PAGE } from '@/app/contants/routes';
import NavLink from './NavLink';
import ToggleNavButton from './ToggleNavButton';

export default function MobileNavigation() {
	return (
		<nav
			className='flex justify-between items-center md:hidden py-4'
			onClick={() => console.log('TEST')}
		>
			<NavLink route={HOME_PAGE} displayText='Logo' />
			<ToggleNavButton />
		</nav>
	);
}
