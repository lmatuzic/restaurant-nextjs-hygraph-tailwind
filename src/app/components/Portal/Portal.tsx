import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
	children: ReactNode;
	isInitialized: boolean;
	handleSetIsInitialized?: () => void;
}

function Portal({ children, isInitialized, handleSetIsInitialized }: PortalProps) {
	const [portalNode, setPortalNode] = useState<HTMLElement | null>(null);

	const handleSetPortalNode = (node: HTMLElement) => {
		setPortalNode(node);
	};

	useEffect(() => {
		const node = document.createElement('div');
		node.setAttribute('id', 'portal');

		if (!isInitialized) {
			return;
		}

		document.body.appendChild(node);
		handleSetPortalNode(node);

		return () => {
			document.body.removeChild(node);
		};
	}, [isInitialized]);

	if (!portalNode || !isInitialized) {
		return null;
	}

	return createPortal(
		<>
			<div
				className='overlay fixed inset-0 bg-transparent z-50 backdrop-blur'
				onClick={handleSetIsInitialized}
			></div>
			{children}
		</>,
		portalNode
	);
}

export default Portal;
