//const redux = require('redux');
//import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counter-slice';
import { authSlice } from './auth-slice';
const store = configureStore({
	reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;

// const counterReducer = (state = { counter: 0, show: true }, action) => {
// 	if (action.type === 'INC')
// 		return { counter: state.counter + 1, show: state.show };
// 	if (action.type === 'INCV')
// 		return { counter: state.counter + action.value, show: state.show };
// 	if (action.type === 'DEC')
// 		return { counter: state.counter - 1, show: state.show };

// 	if (action.type === 'Toggle')
// 		return { counter: state.counter, show: !state.show };

// 	return state;
// };
