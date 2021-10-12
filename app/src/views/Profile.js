import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { LOGOUT } from '../constants/actionTypes'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

export default function App() {

    const dispatch = useDispatch()
    const auth     = useSelector((state) => state.auth)

    const logout = () => {
        dispatch({
            type: LOGOUT
        })
	}

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={{ uri: auth?.authData?.result?.selectedFile }} />
			<Text style={styles.name}>{auth?.authData?.result?.name}</Text>
			<View style={styles.profileBox}>
				<TouchableOpacity onPress={logout} style={styles.LoginButton}>
					<Text style={styles.buttonTextStyle}>Logout</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex           : 1,
		flexDirection  : 'column',
		backgroundColor: '#fff',
		justifyContent : 'center'
    },
	profileBox: {
		flex            : 2,
		flexDirection  : 'column',
		backgroundColor: '#fff',
		justifyContent : 'flex-start',
		alignContent   : 'space-around'
	},
	image: {
        width       : 120,
        height      : 120,
        borderRadius: 400,
        margin      : 10,
        borderWidth : 2,
        borderColor : '#F18228',
        alignSelf   : 'center'
	},
	name: {
		color        : '#CEB99F',
		fontSize     : 20,
		fontFamily   : 'serif',
		fontWeight   : 'bold',
		textTransform: 'capitalize',
		alignSelf    : 'center'
		
	},
	LoginButton: {
		backgroundColor: '#fff',
		borderWidth    : 2,
		color          : '#FFFFFF',
		borderColor    : '#F18228',
		height         : 40,
		alignItems     : 'center',
		borderRadius   : 30,
		marginLeft     : 45,
		marginRight    : 45,
		marginTop      : 20,
		marginBottom   : 25,
	},
	buttonTextStyle: {
		color          : '#CEB99F',
		// paddingVertical: 1,
		marginVertical:7,
		fontSize       : 16,
	},
})