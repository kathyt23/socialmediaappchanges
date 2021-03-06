import react, {useState} from 'react'
import { Platform, Image, TextInput, Button, StyleSheet, Text, KeyboardAvoidingView, TouchableOpacity, View} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/core';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const RegisterScreen = () => {
	const [email, setEmail] = useState ('')
	const [vemail, setvEmail] = useState ('')
	const [password, setPassword] = useState ('')
	const [vpassword, setvPassword] = useState ('')
	const [fname, setfname] = useState ('')
	const [lname, setlname] = useState ('')

	const navigation = useNavigation()

	const handleSignIn = () => {
		navigation.replace('Login')
	}
	
	const handleRegistration = () => {
		createUserWithEmailandPassword(auth, email,password)
			.then(userCredentials => {
				const user = userCredentials.user;
				console.log(user.email);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			  })
	}

	const handleTerms = () => {
		navigation.push('Terms')
	}

	return(
		<LinearGradient
			colors={['#373B44', '#4286f4', '#373B44']}
			style={{
			flex: 1,
			}}
		>
		<KeyboardAvoidingView
			style={styles.container}
			behavior="padding"
		>
			<View style = {styles.titleContainer}>
				<Text style={styles.titleText}> Create Account </Text>
			</View>

			<View style={styles.inputContainer}>
				<View style={styles.action}>
					<FontAwesome
						name="user-o"
						color="#05375a"
						size={20}
					/>
					<TextInput
						placeholder = "Enter First Name..."
						value = {fname}
						onChangeText = {text => setfname(text)}
						style={styles.input}
					/>
				</View>
				<View style={styles.action}>
					<FontAwesome
						name="user-o"
						color="#05375a"
						size={20}
					/>
					<TextInput
						placeholder = "Enter Last Name..."
						value = {lname}
						onChangeText = {text => setlname(text)}
						style={styles.input}
					/>
				</View>
				<View style={styles.action}>
					<FontAwesome
						name="envelope-o"
						color="#05375a"
						size={20}
					/>
					<TextInput
						placeholder = "Enter Email..."
						value = {email}
						onChangeText = {text => setEmail(text)}
						style={styles.input}
					/>
				</View>
				<View style={styles.action}>
					<FontAwesome
						name="envelope-o"
						color="#05375a"
						size={20}
					/>
					<TextInput
						placeholder = "Re-Enter Email..."
						value = {vemail}
						onChangeText = {text => setvEmail(text)}
						style={styles.input}
					/>
				</View>
				<View style={styles.action}>
					<FontAwesome
						name="lock"
						color="#05375a"
						size={20}
					/>
					<TextInput
						placeholder = "Enter Password..."
						value = {password}
						onChangeText = {text => setPassword(text)}
						style={styles.input}
						secureTextEntry
					/>
				</View>
				<View style={styles.action}>
					<FontAwesome
						name="lock"
						color="#05375a"
						size={20}
					/>
					<TextInput
						placeholder = "Re-Enter Password..."
						value = {vpassword}
						onChangeText = {text => setvPassword(text)}
						style={styles.input}
						secureTextEntry
					/>
				</View>
				<Text style={styles.Text}>By registering, you confirm that you accept our 
					<Text style={styles.link} onPress = {handleTerms}> Terms of User </Text> 
					and 
					<Text style={styles.link}> Privacy Policy </Text>
				</Text>

			</View>
			
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					onPress = {handleRegistration}
					style={styles.button}
				>
					<Text style={styles.buttonText}>Register</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress = {handleSignIn}
					style={styles.buttonOutline}
				>
					<Text style={styles.buttonOutlineText}>Have an Account? Click Here</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.bottomContainer}>
				<Text style={styles.footerText}>Created Using React Native </Text>					
			</View>
		</KeyboardAvoidingView>
		 </LinearGradient> //remove this code to remove background
	)
}

export default RegisterScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		marginTop: 30,
		//backgroundColor: '#263238',
	},

	titleContainer: {
		padding: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},

	titleText: {
		fontWeight: 'bold',
		color: '#B9BCC2',
		fontSize: 30,
	},

	inputContainer: {
		width: '80%'
	},

	action: {
		flexDirection: 'row',
		flex: 1,
		backgroundColor: 'white',
		paddingHorizontal: 13,
		paddingVertical: 13,
		borderRadius: 15,
		marginTop: 13,
	},

	input: {
		marginLeft:10,
		width: '100%',
	},

	buttonContainer: {
		width: '60%',
		justifyContent: 'center',
		marginTop: 20,
	},

	button: {
		backgroundColor: '#085097',
		width: '100',
		padding: 15,
		borderRadius: 15,
		alignItems: 'center',
	},

	buttonOutline: {
		marginTop: 15,
		alignItems: 'center',
	},

	buttonText: {
		color: '#B9BCC2',
		fontWeight: '700',
		fontSize: 16,
	},

	buttonOutlineText: {
		color: '#B9BCC2',
		fontWeight: '700',
		fontSize: 16,
	},

	Text: {
		marginLeft: 5,
		marginTop: 10,
		color: '#B9BCC2',
		fontSize: 16,
	},

	link: {
		color: '#085097',
	},

	bottomContainer:{
		width: '100%',
		height: 50,
		position: 'absolute',
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: 50,
		backgroundColor: '#085097',
	},

	footerText: {
		justifyContent: 'center',
		alignItems: 'center',
		color: '#B9BCC2',
		fontSize: 14,
	},

})