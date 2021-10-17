import React from "react"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import AppRoutes from "./AppRoutes"
import reducers from "./src/reducers"

const store = createStore(reducers, compose(applyMiddleware(thunk)))

export default function App() {

	return (
		<Provider store={store}>
			<AppRoutes />
		</Provider>
	)
}