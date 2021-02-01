import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import Header from './components/Header';
import Spinner from './components/Spinner';
import ErrorBoundary from './components/ErrorBoundary';
import './App.scss';

const HomePage = lazy(() => import('./pages/HomePage'));
const ShopPage = lazy(() => import('./pages/ShopPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));

const App = ({ currentUser, checkUserSession }) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<Router>
			<Header />
			<Switch>
				<ErrorBoundary>
					<Suspense fallback={<Spinner />}>
						<Route exact path='/' component={HomePage} />
						<Route path='/shop' component={ShopPage} />
						<Route exact path='/checkout' component={CheckoutPage} />
						<Route
							exact
							path='/signin'
							render={() => (currentUser ? <Redirect to='/' /> : <AuthPage />)}
						/>
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</Router>
	);
};

const mapStateToProps = createStructuredSelector({ currentUser: selectCurrentUser });

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
