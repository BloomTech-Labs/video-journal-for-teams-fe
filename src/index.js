import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Redux
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { oktaConfig } from "./components/okta/oktaConfig";
import { Security } from "@okta/okta-react";

import LoadingView from "./components/utils/LoadingView";
import UserDashboard from "./pages/UserDashboard";

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={<LoadingView />} persistor={persistor}></PersistGate>
		<Router>
			<Security
				issuer="https://dev-292346.okta.com/oauth2/default"
				client_id="0oacbrrfntl0SndJM4x6"
				redirectUri={window.location.origin + "/implicit/callback"}
				disableHttpsCheck>
				<App />
			</Security>
		</Router>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
