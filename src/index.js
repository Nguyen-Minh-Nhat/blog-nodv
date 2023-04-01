import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import persistStore from 'redux-persist/es/persistStore';
import { queryClient } from './config/reactQueryConfig';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistStore(store)}>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<ToastContainer />
					<App />
				</BrowserRouter>
			</QueryClientProvider>
		</PersistGate>
	</Provider>,
	// </React.StrictMode>
);
