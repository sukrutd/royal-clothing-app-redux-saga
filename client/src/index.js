import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { reportWebVitals } from './reportWebVitals';
import { store, persistor } from './redux/store';
import App from './App';

ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function to log results
// (for example: reportWebVitals(console.log))
reportWebVitals();
