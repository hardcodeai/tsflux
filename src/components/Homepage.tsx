import React, { Component } from 'react';
import CounterButton from './CounterButton'

interface IProps{
	increment: ()=>void;
	decrement:()=>void;
	count:number;
}

class Homepage extends Component {
	render() {
		const {increment,decrement,count} = this.props as IProps 
		return (
			<div>
				<span>
					Count : {count}
				</span>
				<CounterButton handleClick={increment} color={'darkcyan'}>
					Increment
				</CounterButton>
				<CounterButton handleClick={decrement} color={'lightgreen'}>	
					Decrement
			</CounterButton>
			</div>
		);
	}
}

export default Homepage;