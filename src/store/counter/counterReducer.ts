import { CounterActionTypes , INCREMENT_COUNTER , DECREMENT_COUNTER} from './models/actions';
import { Counter } from './models/Counter';
import { Reducer, Action } from 'redux'


export const counterReducer: Reducer<Counter,Action> = function(state={ count: 0 }, action:CounterActionTypes ){
	switch(action.type){
		case INCREMENT_COUNTER:
			return {count: state.count + 1};
		case DECREMENT_COUNTER:
			return {count: state.count - 1};
		default: return state;
	}
}
