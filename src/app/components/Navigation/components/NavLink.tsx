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
			className={`font-medium hover:text-emerald-700 transition-colors w-fit ${customClassName}`}
			onClick={customAction}
		>
			{displayText}
		</Link>
	);
}
