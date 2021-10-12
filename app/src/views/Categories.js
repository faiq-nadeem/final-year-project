import React from 'react'
import { useFocusEffect } from '@react-navigation/native'
import Styles from './styles/homeStyle'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { getCategories } from '../actions/categories'

export default function App() {

	const dispatch = useDispatch()
	const categories = useSelector((state) => state.categories)

	useFocusEffect(
		React.useCallback(() => {
		dispatch(getCategories())
		}, [dispatch])
	)

	return (
		<View style={Styles.container}>
			{categories.map((category) => (
				<TouchableOpacity style={Styles.box} key={category._id}>
					<Image style={Styles.image} source={{uri: category.selectedFile}} />
					<Text>{category.title}</Text>
				</TouchableOpacity>
      		))}
		</View>
	)
}