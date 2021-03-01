import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient'
import { auth, db } from "./firebase";

const StudentRegister = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState()


    const register = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName: name,
                });
            })
            .catch((error) => alert(error.message));
        // db.collection("RegisterStudent").add({
        //     email: email,
        //     name: name
        // })

        const submit = async () => {
            await db
                .collection("RegisterStudent")
                .add({
                    email: email,
                    name: name
                })
                .catch(error => alert(error))
        }
        submit();
    }



    return (
        <LinearGradient
            colors={['#29b5e8', 'white']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <View style={styles.container}>
            <Text style={{fontSize:30}}>SIGN UP</Text>
                <Input containerStyle={styles.inpField} placeholder="Name" value={name} type="text" autoFocus onChangeText={(val) => setname(val)} />
                <Input containerStyle={styles.inpField} placeholder="Enter a email" value={email} type="email" onChangeText={(val) => setemail(val)} />
                <Input containerStyle={styles.inpField} placeholder="Password" secureTextEntry value={password} type="password" onChangeText={(val) => setpassword(val)} />
                <Button containerStyle={styles.btn} onPress={register} title="Register" type="outline" />
            </View>
        </LinearGradient>
      
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    inpField: {
        width: 300
    },
    btn: {
        width: 135
    },
});

export default StudentRegister
