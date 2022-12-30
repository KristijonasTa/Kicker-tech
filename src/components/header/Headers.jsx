import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import './headers.css';

const Headers = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<header className={`header ${isOpen && 'open'}`}>
				<div className={`nav-items ${isOpen && 'open'}`}>
					<a href='/#'>Lorem, ipsum.</a>
					<a href='/#'>Lorem, ipsum.</a>
					<a href='/#'>Lorem, ipsum.</a>
				</div>

				<div className='nav-btn' onClick={() => setIsOpen(!isOpen)}>
					{isOpen && <FaTimes />}
					{!isOpen && <FaBars />}
				</div>
			</header>
		</>
	);
};

export default Headers;
