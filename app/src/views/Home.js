import React from "react"
import { NavigationContainer } from "@react-navigation/native"

import TabNavigator from './Navigators/TabNavigator'
import DrawerNavigator from './Navigators/DrawerNavigator'

function App() {
	
  return (
		<NavigationContainer>
	  		<DrawerNavigator />
		</NavigationContainer>
	)
}

export default App