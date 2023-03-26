'use client';

interface ToggleNavButtonProps {
	handleSideDrawerToggle: () => void;
}

export default function ToggleNavButton({ handleSideDrawerToggle }: ToggleNavButtonProps) {
	return (
		<button className='space-y-1' onClick={handleSideDrawerToggle}>
			<span className='block w-4 h-0.5 bg-black'></span>
			<span className='block w-5 h-0.5 bg-black'></span>
			<span className='block w-3 h-0.5 bg-black'></span>
		</button>
	);
}
