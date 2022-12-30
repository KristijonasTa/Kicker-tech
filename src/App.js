import React from 'react';
import Card from './components/card/Card';
import Header from './components/header/Headers';

const App = () => {
	return (
		<div className='main'>
			<Header />
			<div className='wrapper'>
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default App;
