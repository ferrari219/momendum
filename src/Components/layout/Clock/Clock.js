import React from 'react';
import style from './Clock.module.scss';

const Clock = ({ time }) => {
	return (
		<div className={style.clock}>
			<h1>{time}</h1>
			<p>Good afternoon, Chun</p>
		</div>
	);
};

export default Clock;
