import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNaviagtor from './TabNavigator'
import { Icon } from 'react-native-elements'
import { TouchableOpacity, View } from "react-native"

import Categories from '../Categories'
import Advisors from '../Advisors'
import Blogs from '../Blogs'
import Profile from "../Profile"
import HomeDrawer from "../HomeDrawer"

import Styles from "../styles/homeStyle"

const Drawer = createDrawerNavigator()

function App() {
	
  return (
		<Drawer.Navigator >
			<Drawer.Screen name="Ask Expert Now" component={TabNaviagtor} />
		</Drawer.Navigator>
	)
}

export default App