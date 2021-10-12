import React from 'react'
import { useFocusEffect } from '@react-navigation/native'
import Styles from './styles/homeStyle'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { getBlogs } from '../actions/blogs'

export default function App() {

	const dispatch = useDispatch()
	const blogs = useSelector((state) => state.blogs)

	useFocusEffect(
		React.useCallback(() => {
		dispatch(getBlogs())
		}, [dispatch])
	)

	return (
		<View style={Styles.container}>
			{blogs.map((blog) => (
				<TouchableOpacity style={Styles.box} key={blog._id}>
					<Image style={Styles.image} source={{uri: blog.selectedFile}} />
					<Text>{blog.name}</Text>
				</TouchableOpacity>
      		))}
		</View>
	)
}