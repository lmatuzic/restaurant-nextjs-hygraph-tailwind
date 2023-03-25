import { Route } from '../typings/router';

export const HOME_PAGE = '/';
export const ABOUT_PAGE = '/about';
export const EVENTS_PAGE = '/events';
export const MENU_PAGE = '/menu';
export const CONTACT_PAGE = '/contact';
export const GALLERY_PAGE = '/gallery';

export const routes: Route[] = [
	{
		url: HOME_PAGE,
		displayText: '',
	},
	{
		url: ABOUT_PAGE,
		displayText: 'About',
	},
	{
		url: EVENTS_PAGE,
		displayText: 'Events',
	},
	{
		url: MENU_PAGE,
		displayText: 'Menu',
	},
	{
		url: GALLERY_PAGE,
		displayText: 'Gallery',
	},
	{
		url: CONTACT_PAGE,
		displayText: 'Contact',
	},
];
