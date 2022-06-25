import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-slice';

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter.counter);
	const show = useSelector((state) => state.counter.show);

	const incHandler = () => {
		dispatch(counterActions.increment());
	};

	const fiveHandler = () => {
		dispatch(counterActions.addV(5));
	};
	const decHandler = () => {
		dispatch(counterActions.decreament());
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};

	console.log(counter);
	return (
		<main className={classes.counter}>
			<h1>My Redux Counter</h1>
			{show && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incHandler}>Increament</button>
				<button onClick={fiveHandler}>Add 5</button>
				<button onClick={decHandler}>decreament</button>
			</div>

			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};
export default Counter;
// class Counter extends Component {
// 	incHandler = () => {
// 		this.props.increament();
// 	};
// 	decHandler = () => {
// 		this.props.decreament();
// 	};

// 	toggleCounterHandler = () => {};

// 	render() {
// 		return (
// 			<main className={classes.counter}>
// 				<h1>Redux Counter</h1>
// 				<div className={classes.value}>{this.props.counter}</div>
// 				<div>
// 					<button onClick={this.incHandler.bind(this)}>Increament</button>
// 					<button onClick={this.decHandler.bind(this)}>decreament</button>
// 				</div>

// 				<button onClick={this.toggleCounterHandler}>Toggle Counter</button>
// 			</main>
// 		);
// 	}
// }
// const mapStateToProps = (state) => {
// 	return {
// 		counter: state.counter,
// 	};
// };
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		increament: () => dispatch({ type: 'INC' }),
// 		decreament: () => dispatch({ type: 'DEC' }),
// 	};
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
