import { StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
	mainBody: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#5634C9',
		alignContent: 'center',
	},
	SectionStyle: {
		flexDirection: 'row',
		height: 40,
		marginTop: 20,
		marginLeft: 35,
		marginRight: 35,
		margin: 10,
	},
	LoginButton: {
		backgroundColor: '#D72A92',
		borderWidth: 0,
		color: '#FFFFFF',
		borderColor: 'black',
		height: 40,
		alignItems: 'center',
		borderRadius: 30,
		marginLeft: 45,
		marginRight: 45,
		marginTop: 20,
		marginBottom: 25,
	},
	buttonTextStyle: {
		color: '#FFFFFF',
		paddingVertical: 10,
		fontSize: 16,
	},
	inputStyle: {
		flex: 1,
		color: 'white',
		paddingLeft: 15,
		paddingRight: 15,
		borderWidth: 1,
		borderRadius: 30,
		borderColor: '#D72A92',
	},
	registerTextStyle: {
		color: '#FFFFFF',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 14,
		alignSelf: 'center',
		padding: 10,
	},
	errorTextStyle: {
		color: 'red',
		textAlign: 'center',
		fontSize: 14,
	},
})

export default Styles