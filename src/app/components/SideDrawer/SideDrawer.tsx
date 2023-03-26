'use client';

import { HOME_PAGE, routes } from '@/app/contants/routes';
import NavLink from '../Navigation/components/NavLink';

interface SideDrawerProps {
	isOpened: boolean;
	closeSideDrawer?: () => void;
}

export default function SideDrawer({ isOpened, closeSideDrawer }: SideDrawerProps) {
	return (
		<div
			className={`${
				isOpened ? 'flex' : 'hidden'
			} flex-col min-h-screen fixed top-0 right-0 overflow-auto p-4 min-w-[18rem] bg-zinc-800 z-100`}
		>
			<NavLink
				route={HOME_PAGE}
				displayText='LOGO'
				customClassName='text-white mb-8'
				customAction={closeSideDrawer}
			/>

			<ul className='flex flex-col items-baseline'>
				{routes.slice(1).map((route) => (
					<li className='mb-4' key={route.url}>
						<NavLink
							route={route.url}
							displayText={route.displayText}
							customClassName='text-white'
							customAction={closeSideDrawer}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
