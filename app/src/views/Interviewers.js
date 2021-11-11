import React from 'react'
import { useFocusEffect } from '@react-navigation/native'
import Styles from './styles/homeStyle'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { getInterviewers } from '../actions/interviewers'

export default function App() {

	const dispatch     = useDispatch()
	const interviewers = useSelector((state) => state.interviewers)

	useFocusEffect(
		React.useCallback(() => {
		dispatch(getInterviewers())
		}, [dispatch])
	)

	return (
		<View style={Styles.container}>
			{interviewers.map((interviewer) => (
				<TouchableOpacity style={Styles.box} key={interviewer._id}>
					<Image style={Styles.image} source={{uri: interviewer.selectedFile}} />
					<Text>{interviewer.name}</Text>
				</TouchableOpacity>
      		))}
		</View>
	)
}