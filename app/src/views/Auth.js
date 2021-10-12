import React, {useState} from "react"
import {useDispatch} from 'react-redux'
import Styles from './styles/authStyle'
import { SafeAreaView, TextInput, View, Text, ScrollView, Image, Keyboard, TouchableOpacity, KeyboardAvoidingView } from "react-native"
import { Picker } from "@react-native-picker/picker"
import { signIn, signUp } from '../actions/auth'
import FileBase from 'react-file-base64'

const initialState = {
    firstName      : '',
    lastName       : '',
    email          : '',
    password       : '',
    confirmPassword: '',
    dob            : '',
    gender         : '',
    userRole       : 'user',
    userStatus     : 'active',
    credits        : 0,
    selectedFile   : ''
}

export default function Auth() {

    const dispatch                = useDispatch()
    const [formData, setFormData] = useState(initialState)
    const [isSignUp, setIsSignUp] = useState(false)

    const handleEmailChange = (e) => {
        setFormData({
            ...formData,
            email: e
        })
    }
    const handlePasswordChange = (e) => {
        setFormData({
            ...formData,
            password: e
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(isSignUp) {
            dispatch(signUp(formData))
        } else {
            dispatch(signIn(formData))
        }
	}

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
    }

	return (
		<SafeAreaView style={Styles.mainBody}>
			<ScrollView
				keyboardShouldPersistTaps="handled"
				contentContainerStyle={{
					flex          : 1,
					justifyContent: "center",
					alignContent  : "center",
				}}
			>
				<ScrollView>
					<KeyboardAvoidingView enabled>
						{ !isSignUp ? (
							<View
								style={{
									alignItems  : "center",
									margin      : 30,
									marginBottom: 0,
									height      : 400,
								}}
							>
									
								<Image
									source={require("../../assets/adaptive-icon.png")}
									style={{
										width     : "100%",
										height    : 200,
										resizeMode: "contain",
									}}
								/>
								<Text style={Styles.registerTextStyle}>ASK EXPERTS ONLINE</Text>
							</View>
						) : (
								<View
								style={{
									alignItems  : "center",
									margin      : 30,
									marginBottom: 0,
									height      : 150,
								}}
							>
									
								<Image
									source={require("../../assets/adaptive-icon.png")}
									style={{
										width     : "100%",
										height    : 100,
										resizeMode: "contain",
									}}
								/>
								<Text style={Styles.registerTextStyle}>ASK EXPERTS ONLINE</Text>
							</View>
							)
						}

						{   isSignUp && (
                                        <>
											<View style={Styles.SectionStyle}>
												<TextInput
													style                 = {Styles.inputStyle}
													placeholder           = "Enter First Name"
													name                  = "email"
													placeholderTextColor  = "#8b9cb5"
													autoCapitalize        = "none"
													keyboardType          = "default"
													returnKeyType         = "next"
													underlineColorAndroid = "#f000"
													blurOnSubmit          = {false}
													onChangeText          = {handleEmailChange}
												/>
											</View>
											<View style={Styles.SectionStyle}>
												<TextInput
													style                 = {Styles.inputStyle}
													placeholder           = "Enter Last Name"
													name                  = "email"
													placeholderTextColor  = "#8b9cb5"
													autoCapitalize        = "none"
													keyboardType          = "default"
													returnKeyType         = "next"
													underlineColorAndroid = "#f000"
													blurOnSubmit          = {false}
													onChangeText          = {handleEmailChange}
												/>
											</View>
                                        </>
                                    )
						}
						
						<View style={Styles.SectionStyle}>
							<TextInput
								style                 = {Styles.inputStyle}
								placeholder           = "Enter Email"
								name                  = "email"
								placeholderTextColor  = "#8b9cb5"
								autoCapitalize        = "none"
								keyboardType          = "email-address"
								returnKeyType         = "next"
								underlineColorAndroid = "#f000"
								blurOnSubmit          = {false}
								onChangeText          = {handleEmailChange}
							/>
						</View>
						<View style={Styles.SectionStyle}>
							<TextInput
								style                 = {Styles.inputStyle}
								placeholder           = "Enter Password"
								placeholderTextColor  = "#8b9cb5"
								keyboardType          = "default"
								onSubmitEditing       = {Keyboard.dismiss}
								blurOnSubmit          = {false}
								secureTextEntry       = {true}
								underlineColorAndroid = "#f000"
								returnKeyType         = "next"
								onChangeText          = {handlePasswordChange}
							/>
						</View>
						{ isSignUp && (
							<>
								<View style={Styles.SectionStyle}>
									<TextInput
										style                 = {Styles.inputStyle}
										placeholder           = "Confirm Password"
										name                  = "email"
										placeholderTextColor  = "#8b9cb5"
										autoCapitalize        = "none"
										keyboardType          = "default"
										returnKeyType         = "next"
										underlineColorAndroid = "#f000"
										blurOnSubmit          = {false}
										onChangeText          = {handleEmailChange}
									/>
								</View>
								<View style={Styles.SectionStyle}>
									
								</View>
								
								<View style={Styles.SectionStyle}>
									<Picker
										
										// onValueChange={(value, index) => setCountry(value)}
										mode="dropdown" // Android only
										style={Styles.inputStyle}
									>
										<Picker.Item label="Male" value="male" />
										<Picker.Item label="Female" value="female" />
										<Picker.Item label="Rather Not Say" value="undefined" />
									</Picker>
								</View>
							</>
							)
						}
						<TouchableOpacity
							style         = {Styles.LoginButton}
							activeOpacity = {0.5}
							onPress       = {handleSubmit}
						>
							<Text style={Styles.buttonTextStyle}>{isSignUp ? 'Sign Up' : 'Sign In'}</Text>
						</TouchableOpacity>

						<TouchableOpacity onPress={switchMode}>
							<Text style={Styles.registerTextStyle}>{isSignUp ? 'Already Have an Account? Sign In' : 'Do not have an account? Sign Up'}</Text>
						</TouchableOpacity>

					</KeyboardAvoidingView>
				</ScrollView>
			</ScrollView>
		</SafeAreaView>
	)
}