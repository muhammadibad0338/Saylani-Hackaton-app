import React, { useState, useEffect } from 'react'
import{ Text, StyleSheet, View }from "react-native"
import {Input,Button} from "react-native-elements"
import { auth, db } from "./firebase";
import { LinearGradient } from 'expo-linear-gradient'



const Company = ({navigation}) => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [Student, setStudent] = useState([])
    
    useEffect(() => {

        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace("CompanyHome")
            }
        });


        db.collection("RegisterStudent").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                arr.push(doc.data.email)
                
            });
            
        })
        return unsubscribe

    },[])


    const signIn = () => {

        auth
            .signInWithEmailAndPassword(email, password)
            .catch((error) => alert(error))

    };

    return (
        <LinearGradient
            colors={['#29b5e8', 'white']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
        <View style={styles.container}>
        <Text style={{fontSize:30}}>LOGIN</Text>
        <Input containerStyle={styles.inpField} placeholder="Enter a email" type="email" value={email} autoFocus onChangeText={(val) => setemail(val)} />
        <Input containerStyle={styles.inpField} placeholder=" Enter a Password" type="password" value={password} secureTextEntry onChangeText={(val) => setpassword(val)} />
        <Button onPress={signIn} containerStyle={{ marginTop: 10, width: 135,backgroundColor:"white",padding:5,borderRadius:10 }} type="clear" title="LOG IN" />
        <Button onPress={() => navigation.navigate("StudentRegister")} containerStyle={{ marginTop: 10, width: 135,backgroundColor:"white",padding:5,borderRadius:10 }} type="clear" title="Sign Up" />
       
    </View>
    </LinearGradient>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inpField: {
        width: 300
    },
    btn: {
        width: 135
    }
});

export default Company
