import { HOME_PAGE, routes } from '@/app/contants/routes';
import React from 'react';
import ReservationButton from '../../ReservationButton/ReservationButton';
import NavLink from './NavLink';

export default function DesktopNavigation() {
	return (
		<nav className='flex justify-between items-center py-8'>
			<NavLink route={HOME_PAGE} displayText='Logo' />

			<ul className='flex items-center'>
				{routes.slice(1).map((route) => (
					<li className='mr-6' key={route.url}>
						<NavLink route={route.url} displayText={route.displayText} />
					</li>
				))}
			</ul>

			<ReservationButton />
		</nav>
	);
}
