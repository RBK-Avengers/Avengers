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
import Profile from './Profile';

export default class Login extends React.Component {
	constructor(props){
		super(props);
		this.state={
			username:'',
			password:'',
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
    <Text style={styles.header}> LOGIN </Text>
    <TextInput
    	style={styles.textInput} 
    	placeholder='Username'
    	onChangeText={(username) => this.setState({username})}
    		


    /> 
     <TextInput
    	style={styles.textInput} 
    	placeholder='Password'
    	onChangeText={(password) => this.setState({password})}
    	


    /> 
    <TouchableOpacity
    	style={styles.btn}
    	onPress={() =>
    		this.props.navigation.navigate('Profile')
    	}
    	>
    	<Text>Log in</Text>
    	</TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
    );
  }
//   login=()=>{
//   	alert('test')
//   	//   	fetch('http://192.5454.25.2:3000/users'),{
// //   		method:'POST',
// //   		'Content-Type':'application/json',
// //   	},
// //   	body:JSON.stringify({
// //   		email:this.state.email,
// //   		password:this.state.password,
// //   	})
// //   })
// // .then((response) => response.json())
// // .then((res => {

// // 	if(res.success===true){
// // 	AsyncStorage.setItem('user',res.user);
// // 	this.props.navigation.navigate('Profile');
// // }
// // else{
// // 	alet(res.message);
// //      }
// //    })
// // 	.done()
// //   }
//   }
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

