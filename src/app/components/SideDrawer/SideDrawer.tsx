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
			<header className='flex justify-between items-center mb-12'>
				<NavLink
					route={HOME_PAGE}
					displayText='Logo'
					customClassName='text-white '
					customAction={closeSideDrawer}
				/>

				<button className='w-6 h-6' onClick={closeSideDrawer}>
					<svg
						fill='none'
						stroke='currentColor'
						stroke-width='1.5'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'
						className='text-white'
					>
						<path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12'></path>
					</svg>
				</button>
			</header>

			<ul className='flex flex-col items-end'>
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
