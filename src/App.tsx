import React from 'react';
import Homepage from './components/Homepage'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {AppState} from './store/rootStore'
import {incrementCount,decrementCount} from './store/counter/counterActions'


interface AppActions{
	increment: ()=>void;
	decrement:()=>void;
}

type AppStateProps = {
	count:number
}

type AppProps = AppActions & AppStateProps;

const App = (props:AppProps) => {
  return (
			<div className="App">
				<Homepage {...props}/>
			</div>
  );
}

const mapStateToProps = (state:AppState) => {
	return {count: state.counterReducer.count}
}

const mapDispatchToProps = (dispatch:Dispatch): AppActions => {
	return {
		increment: ()=>dispatch(incrementCount()),
		decrement: ()=>dispatch(decrementCount() )
	}
} 

export default connect(mapStateToProps,mapDispatchToProps)(App);
