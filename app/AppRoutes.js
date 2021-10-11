import React from "react"
import {useSelector} from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay'

import Home from './src/views/Home'
import Auth from './src/views/Auth'


function App() {

	const isLoading = useSelector((state) => state.loader)
	const auth      = useSelector((state) => state.auth)
	
	// alert(JSON.stringify(auth?.authData))

	return (
		<>
			{isLoading?.status === true && (
					<Spinner
						visible={isLoading?.status}
						// textContent={'Loading...'}
						textStyle={{ color: 'white' }}
					/>
				)
			}
			
			
			{
				!auth?.authData ? (
					<Auth />
				) : (
						<Home />
					)
			}
		</>
	)
		
}

export default App