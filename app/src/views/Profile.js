import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LOGOUT } from '../constants/actionTypes'

export default function App() {

    const dispatch                      = useDispatch()
    const [userProfile, setUserProfile] = useState(null)
    const userMyProfile                 = JSON.parse(userProfile)

	AsyncStorage.getItem('profile').then((e) => { setUserProfile(e) })

    const logout = () => {
        dispatch({
            type: LOGOUT
        })
        
        setUserProfile(null)
    }

	return (
        <View style={styles.container}>
            <TouchableOpacity onPress={logout} style={styles.box}>
                <Text>Logout</Text>
            </TouchableOpacity>
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