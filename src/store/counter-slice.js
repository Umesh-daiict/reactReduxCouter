import { createSlice } from '@reduxjs/toolkit';
const initialState = { counter: 0, show: true };

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment(state) {
			state.counter++;
		},
		decreament(state) {
			state.counter--;
		},
		addV(state, action) {
			state.counter = state.counter + action.payload;
		},
		toggleCounter(state) {
			state.show = !state.show;
		},
	},
});
export const counterActions = counterSlice.actions;
