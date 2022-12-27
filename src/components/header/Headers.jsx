import React from 'react';
import { useState } from 'react';
import './headers.css';

const Headers = () => {
	const [mobile, setMobile] = useState(false);

	return (
		<div>
			<header>
				<ul className='list'>
					<li>Lorem, ipsum.</li>
					<li>Lorem, ipsum.</li>
					<li>Lorem, ipsum.</li>
				</ul>
				<div id='mobile'>
					<button className='navBar' onClick={() => setMobile(!mobile)}>
						<i className='fas fa-bars'></i>
					</button>
				</div>
			</header>
		</div>
	);
};

export default Headers;
