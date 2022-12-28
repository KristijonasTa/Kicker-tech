import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import './headers.css';

const Headers = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<header>
				<div className={`nav-items ${isOpen && 'open'}`}>
					<a href='/#'>Lorem, ipsum.</a>
					<a href='/#'>Lorem, ipsum.</a>
					<a href='/#'>Lorem, ipsum.</a>
					<div className='nav-btn'>
						<FaBars />
					</div>
					<div />
				</div>
				<div
					className={`close-btn ${isOpen && 'open'}`}
					onClick={() => setIsOpen(!isOpen)}
				>
					<FaTimes />
				</div>
			</header>
		</div>
	);
};

export default Headers;
