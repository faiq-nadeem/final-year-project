import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { getAdvisors } from '../actions/users'

export default function App() {

	const dispatch                      = useDispatch()
	const advisors                      = useSelector((state) => state.users)
	const [userProfile, setUserProfile] = useState(null);
	const userMyProfile                 = JSON.parse(userProfile)

	AsyncStorage.getItem('profile').then((e) => { setUserProfile(e) });

	useEffect(() => {
		dispatch(getAdvisors())
	}, [dispatch])

	// alert(JSON.stringify(userMyProfile))

	// if (userMyProfile?.result?.userRole !== 'advisor') {
	// 	// navigation.popToTop()
	// 	return (
	// 		<Text>this is User</Text>
	// 	)
	// }

	return (
		<View style={styles.container}>
			{advisors.map((advisor) => (
				<TouchableOpacity style={styles.box} key={advisor._id}>
					<Image style={styles.image} source={{uri: advisor.selectedFile}} />
					<Text>{advisor.name}</Text>
				</TouchableOpacity>
      		))}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex           : 1,
		flexDirection  : 'row',
		flexWrap       : 'wrap',
		backgroundColor: '#fff',
		justifyContent : 'center',
    },
	box: {
		margin          : 20,
		flexDirection   : 'column',
		flexWrap        : 'wrap',
		borderRadius    : 10,
		backgroundColor : 'oldlace',
		alignSelf       : 'flex-start',
		alignItems      : 'center',
		marginHorizontal: '2%',
		minWidth        : '45%',
		justifyContent  : 'space-around',
	},
    image: {
        resizeMode  : 'cover',
        width       : '100%',
        height      : 150,
        borderRadius: 10,
	},
})