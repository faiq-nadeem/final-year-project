import React from 'react'
import { useFocusEffect } from '@react-navigation/native'
import Styles from './styles/homeStyle'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { getUsers } from '../actions/users'

export default function App() {

	const dispatch = useDispatch()
	const users    = useSelector((state) => state.users)

	useFocusEffect(
		React.useCallback(() => {
		dispatch(getUsers())
		}, [dispatch])
	)

	return (
		<View style={Styles.container}>
			{users.map((user) => (
				<TouchableOpacity style={Styles.box} key={user._id}>
					<Image style={Styles.image} source={{uri: user.selectedFile}} />
					<Text>{user.name}</Text>
				</TouchableOpacity>
      		))}
		</View>
	)
}