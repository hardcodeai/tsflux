import React,{ FC, ReactNode ,PropsWithChildren } from 'react'

interface ICounterProps{
	color?: string;
	handleClick: ()=>void
}

//Always will be using this as the go to method of defining the component and props, which will allow the usage of destructuring as well

const CounterButton : FC<PropsWithChildren<ICounterProps>> = (props) => {
	const { color = 'red', children, handleClick } = props;
	return (
		<div>
			<button style={{cursor:'pointer',backgroundColor:color,margin:'20px',padding:'10px'}} onClick={()=>handleClick()}>{children}</button>
		</div>
	)
}

// function CounterButton(props:PropsWithChildren<ICounterProps>){
// 	const { color = 'red', children } = props;
// 	return (
// 		<div>
// 			<button style={{cursor:'pointer',backgroundColor:color,margin:'20px',padding:'10px'}} onClick={()=>console.log(children)}>{children}</button>
// 		</div>
// 	)
// }

export default CounterButton
