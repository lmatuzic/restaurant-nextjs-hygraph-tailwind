import Link from 'next/link';

interface NavLinkProps {
	route: string;
	displayText: string;
	customAction?: () => void;
	customClassName?: string;
}

export default function NavLink({
	route,
	displayText,
	customAction,
	customClassName,
}: NavLinkProps) {
	return (
		<Link
			href={route}
			className={`font-medium hover:text-orange-700 transition-colors ${customClassName}`}
			onClick={customAction}
		>
			{displayText}
		</Link>
	);
}
