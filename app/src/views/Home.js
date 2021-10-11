import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Advisors from './Advisors'
import Users from "./Users"
import Profile from "./Profile"

const Tab = createBottomTabNavigator()

function App() {
	
  return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Home" component={Advisors} />
				<Tab.Screen name="Users" component={Users} />
				<Tab.Screen name="Profile" component={Profile} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}

export default App
