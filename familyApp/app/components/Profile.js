import React from 'react';
import {
 StyleSheet,
 Text, 
 View ,
 TouchableOpacity,

} from 'react-native';
import Login from './Login';
import { createStackNavigator } from 'react-navigation';
export default class Profile extends React.Component {
	
  render() {
    return (
   <View style={styles.container}>
    <TouchableOpacity
      style={styles.btn}
      onPress={() =>
        this.props.navigation.navigate('Login')
      }
      >
      <Text>Logout</Text>
      </TouchableOpacity>
    <View >
         <Text style={styles.text}>Welcome to the Member Area </Text>
   
    </View>
   </View>
    );
  }
  
}

const styles = StyleSheet.create({

container: {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#2896d3',
},
text: {
	color: '#fff',
},
btn: {
 
  backgroundColor:'#01c853',
  padding:20,
  alignItems:'center',
}
})

