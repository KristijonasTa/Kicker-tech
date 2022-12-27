import React from 'react';
import './card.css';

const Card = () => {
	return (
		<div className='card'>
			<div className='top-card'>
				<div className='picture'></div>
				<div className='text-block'>
					<h4>Lorem ipsum dolor sit amet consectetur.</h4>
					<p>Lorem, ipsum.</p>
					<p>Lorem ipsum dolor sit.</p>
				</div>
			</div>
			<div className='bottom-card'>
				<div className='scroll-bar'>
					<form className='search-tab'>
						<input type='text' placeholder='Placeholder...'></input>
						<button>Submit</button>
					</form>
					<div>
						<div className='scroll-div'>
							<div>
								<div className='profile'>
									<div className='picture-comment'></div>
									<p>Lorem, ipsum.</p>
								</div>
								<div className='post'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Earum, delectus?
								</div>
							</div>
						</div>
						<div className='scroll-div'>
							<div>
								<div className='profile'>
									<div className='picture-comment'></div>
									<p>Lorem, ipsum.</p>
								</div>
								<div className='post'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Earum, delectus?
								</div>
							</div>
						</div>
						<div className='scroll-div'>
							<div>
								<div className='profile'>
									<div className='picture-comment'></div>
									<p>Lorem, ipsum.</p>
								</div>
								<div className='post'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Earum, delectus?
								</div>
							</div>
						</div>
						<div className='scroll-div'>
							<div>
								<div className='profile'>
									<div className='picture-comment'></div>
									<p>Lorem, ipsum.</p>
								</div>
								<div className='post'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Earum, delectus?
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
