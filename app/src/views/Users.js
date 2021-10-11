import React, { useState, useEffect} from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { getUsers } from '../actions/users'
import { NavigationContainer } from '@react-navigation/native'

export default function App({navigation}) {

	const dispatch                      = useDispatch()
	const users                         = useSelector((state) => state.users)
	const [userProfile, setUserProfile] = useState(null);
	AsyncStorage.getItem('profile').then((e) => { setUserProfile(e) });

	useEffect(() => {
		dispatch(getUsers())
	}, [dispatch])

	// alert(JSON.stringify(users))

	if (!userProfile?.result?.userRole === 'advisor') {
		// navigation.popToTop()
		return (
			<div>this is user</div>
		)
	}
	return (
		<View style={styles.container}>
			{users.map((user) => (
				<TouchableOpacity style={styles.box} key={user._id}>
					<Image style={styles.image} source={{uri: user.selectedFile}} />
					<Text>{user.name}</Text>
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