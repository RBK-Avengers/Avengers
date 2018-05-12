import React from 'react';
import {
 StyleSheet,
 Text, 
 View ,
 TextInput,
 KeyboardAvoidingView,
 TouchableOpacity,
 AsyncStorage,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './Login';
//import {Picker,Item} from 'react-native';

export default class Signup extends React.Component {
	constructor(props){
		super(props);
		this.state={
			username:'',
			email:'',
			password:'',
			DateOfBirth:'',
			role:'',
			familyid:'',
		}
	}
	componentDidMount(){
		this._loadInitialState().done();
	}
	_loadInitialState = async () => {
		var value = await AsyncStorage.getItem('user');
		if(value !== null){
			this.props.navigation.navigate('Profile')
		}
	}
  render() {
    return (
    <KeyboardAvoidingView behaviour='padding' style ={styles.wrapper}>
    <View style={styles.container}>
    <Text style={styles.header}> SIGNUP</Text>
    <TextInput
    	style={styles.textInput} 
    	placeholder='Username'
    	onChangeText={(username) => this.setState({username})}
    /> 
     <TextInput
    	style={styles.textInput} 
    	placeholder='Email'
    	onChangeText={(email) => this.setState({email})}
    /> 
    <TextInput
    	style={styles.textInput} 
    	placeholder='Password'
    	onChangeText={(password) => this.setState({password})}
    /> 
     <TextInput
    	style={styles.textInput} 
    	placeholder='DateOfBirth'
    	onChangeText={(DateOfBirth) => this.setState({DateOfBirth})}
    /> 
    <TextInput
    	style={styles.textInput} 
    	placeholder='Role'
    	onChangeText={(role) => this.setState({role})}
    /> 
    <TextInput
    	style={styles.textInput} 
    	placeholder='FamilyID'
    	onChangeText={(familyid) => this.setState({familyid})}
    /> 
   

  
    <TouchableOpacity
    	style={styles.btn}

    	onPress={()=>
    		this.props.navigation.navigate('Login')
    	}
    	>

    	<Text>Sign up</Text>
    	</TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
    );
  }
  
}

const styles = StyleSheet.create({
wrapper: {
	flex: 1,
},
container: {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#2896d3',
	paddingLeft: 40,
	paddingRight: 40,
},
header: {
	fontSize: 24,
	marginBottom: 60,
	color: '#fff',
	fontWeight: 'bold',
},
textInput: {
	alignSelf: 'stretch',
	padding: 16,
	marginBottom: 20,
	backgroundColor: '#fff',
},
btn: {
	alignSelf:'stretch',
	backgroundColor:'#01c853',
	padding:20,
	alignItems:'center',
}

})

