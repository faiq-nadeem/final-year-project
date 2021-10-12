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
})

export default Styles