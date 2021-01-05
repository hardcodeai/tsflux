export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export interface IncrementAction{
	type: typeof INCREMENT_COUNTER;
}

export interface DecrementAction{
	type: typeof DECREMENT_COUNTER;
}

export type CounterActionTypes = IncrementAction | DecrementAction; 