import React, { Component } from 'react';
import style from './App.module.scss';
import Clock from 'comp/layout/Clock';

class App extends Component {
	state = {
		time: '99:99:99',
	};
	tick = () => {
		const date = new Date();
		const hour = date.getHours();
		const min = date.getMinutes();
		const sec = date.getSeconds();
		this.setState({
			time: hour + ':' + min + ':' + sec,
		});
	};
	render() {
		const { time } = this.state;
		const { tick } = this;
		setInterval(tick, 1000);
		return (
			<div className={style.wrap}>
				<Clock time={time} />
			</div>
		);
	}
}

export default App;
