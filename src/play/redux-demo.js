//not using react but nodeJS
const redux = require('redux');
const couterReducer = (state = { couter: 0 }, action) => {
	if (action.type === 'increase')
		return {
			couter: state.couter + 1,
		};

	if (action.type === '2increase')
		return {
			couter: state.couter + 2,
		};

	return state;
};

const store = redux.createStore(couterReducer);
//console.log(store.getState());
const couterSubscriber = () => {
	const latestState = store.getState();
	console.log(latestState);
};

store.subscribe(couterSubscriber);
store.dispatch({ type: 'increase' });
store.dispatch({ type: '2increase' });
