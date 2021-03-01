import React,{useState} from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { Input, Button } from "react-native-elements"



const Admin = (props) => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");


    const signIn = () => {
        console.log(email)
        if (email == 'admin' && password == 'admin') {
          props.navigation.navigate("Adminpanel")
        }
        else {
          alert("Soryy")
        }
      };

    return (
        <View style={styles.container}>
        <Text style={{ color: '#000051', fontSize: 42, fontWeight: 'bold', marginTop: 20 }}>Admin Login</Text>
      <Input
        placeholder='  admin'
        style={{ width: 300 }}
        type="email"
        value={email} autoFocus onChangeText={(val) => setemail(val)}
        containerStyle={{ width: 300, borderRadius: 50, marginTop: 50 }}
        leftIcon={{ type: 'font-awesome', name: 'user', color: '#000051' }} />
      <Input
        placeholder=' admin'
        style={{ width: 300 }}
        type="password" value={password} secureTextEntry
        onChangeText={(val) => setpassword(val)}
        containerStyle={{ width: 300, borderRadius: 50 }}
        leftIcon={{ type: 'font-awesome', name: 'lock', color: '#000051' }} />
      <View style={styles.btns}>
        <Button titleStyle={{ color: '#000051' }} buttonStyle={{ borderColor: '#000051', color: 'red', }} onPress={signIn} containerStyle={styles.btn} type="outline" title="LOG IN" />

      </View>
        </View>
    )
}

export default Admin


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        width: "100%",
        borderColor: "#000051",
        color: "#000051"
      }
});