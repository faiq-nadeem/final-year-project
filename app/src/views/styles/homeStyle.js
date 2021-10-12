import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
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
	tabBar:{
		position: 'absolute',
		bottom: 10,
		left: 20,
		right: 20,
		elevation: 0,
		backgroundColor: '#5634C9',
		borderRadius: 100,
		height: 60,
		shadowColor: '#7F5DF0',
		shadowOffset: {
			width: 0,
			height: 10
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.5,
		elevation: 5
	}
})

export default Styles