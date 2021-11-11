import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import { TouchableOpacity, View } from "react-native"

import Categories from '../Categories'
import Advisors from '../Advisors'
import Interviewers from '../Interviewers'
import Blogs from '../Blogs'
import Profile from "../Profile"

import Styles from "../styles/homeStyle"

const Tab = createBottomTabNavigator()

const CustomTabBarButton = ({children, onPress}) => (
		<TouchableOpacity
			style={{
				top           : -30,
				justifyContent: 'center',
				alignItems    : 'center',
				
			}}
			onPress={onPress}
		>
			<View
				style={{
					width          : 50,
					height         : 50,
					borderRadius   : 35,
					backgroundColor: '#F18228'
				}}
			>
				{children}
			</View>
		</TouchableOpacity>
	)

function App() {
	
  return (
			<Tab.Navigator initialRouteName='Advisors'
			  	screenOptions = {{
					  tabBarShowLabel: false,
					  tabBarStyle    : Styles.tabBar
				  }}

		  	>
				<Tab.Screen name="Categories" component={Categories}
					options={{
						tabBarIcon: ({focused}) => (
								<Icon
									name  = 'apps'
									type  = 'ionicon'
									color = {focused ? '#F18228' : '#ffffff'}
								/>
						),
						headerShown: false
					}}
				/>
				<Tab.Screen name="Interviewers" component={Interviewers}
					options={{
						tabBarIcon: ({focused}) => (
							<Icon
								name  = 'people-sharp'
								type  = 'ionicon'
								color = {focused ? '#F18228' : '#ffffff'}
							/>
						),
						headerShown: false
					}}
				/>
				<Tab.Screen name="Advisors" component={Advisors}
					options={{
						tabBarIcon: ({focused}) => (
							<Icon
								name  = 'home-sharp'
								type  = 'ionicon'
								color = '#ffffff'
							/>
						),
						tabBarButton:(props) => (
							<CustomTabBarButton {... props} /> 
						),
						headerShown: false
					}}
				/>
				<Tab.Screen name="Blogs" component={Blogs}
					options={{
						tabBarIcon: ({focused}) => (
								<Icon
									name  = 'albums'
									type  = 'ionicon'
									color = {focused ? '#F18228' : '#ffffff'}
								/>
						),
						headerShown: false
					}}
				/>
				<Tab.Screen name="Profile" component={Profile}
					options={{
						tabBarIcon: ({focused}) => (
							<Icon
								name  = 'settings-sharp'
								type  = 'ionicon'
								color = {focused ? '#F18228' : '#ffffff'}
							/>
						),
						headerShown: false
					}}
				/>
			</Tab.Navigator>
	)
}

export default App