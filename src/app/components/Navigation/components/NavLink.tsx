import Link from "next/link";

interface NavLinkProps {
  route: string;
  displayText: string;
  customClassName?: string;
}

export default function NavLink({
  route,
  displayText,
  customClassName,
}: NavLinkProps) {
  return (
    <Link
      href={route}
      className={`font-medium hover:text-orange-700 transition-colors ${customClassName}`}
    >
      {displayText}
    </Link>
  );
}
