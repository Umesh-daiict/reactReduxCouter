import classes from './Header.module.css';
import { authActions } from '../store/auth-slice';
import { useSelector, useDispatch } from 'react-redux';
const Header = () => {
	const auth = useSelector((state) => state.auth.isAuthed);
	const dispatch = useDispatch();

	const logoutHandler = () => {
		dispatch(authActions.logout());
	};
	return (
		<header className={classes.header}>
			<h1>redux-CA</h1>
			{auth && (
				<nav>
					<ul>
						<li>
							<a href='/'>My Link</a>
						</li>
						<li>
							<button onClick={logoutHandler}>Logout</button>
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
};

export default Header;
