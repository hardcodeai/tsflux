import { combineReducers , createStore } from 'redux';
import { counterReducer } from './counter/counterReducer';

export const rootReducer = combineReducers({counterReducer});
export const store = createStore(rootReducer)

export type AppState = ReturnType<typeof rootReducer>