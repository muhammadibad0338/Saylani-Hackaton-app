import React from 'react'
import { Text, StyleSheet } from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import { Button, Image } from "react-native-elements"
import { View } from 'react-native'


const Mainhome = ({ navigation }) => {
    return (
         <LinearGradient
            colors={['#29b5e8', 'white']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
        <Image 
            source={{uri : "https://www.jobsoid.com/wp-content/uploads/2019/01/What-goes-into-a-perfect-recruitment-process%EF%80%A5-640x480.png"}}
            style={{width:250,height:250}}

        />
            <Button  onPress={() => navigation.navigate("Student")} title="Student" type="clear" containerStyle={{ marginTop: 10, width: 135,backgroundColor:"white",padding:5,borderRadius:10 }} />
            <Button onPress={() => navigation.navigate("Company")} title="Company" type="clear" containerStyle={{ marginTop: 20, width: 135,backgroundColor:"white",padding:5,borderRadius:10 }} />
            <Button onPress={() => navigation.navigate("Admin")} title="Admin" type="clear" containerStyle={{ marginTop: 20, width: 135 ,backgroundColor:"white",padding:5,borderRadius:10}} />
            <View style={{height:150}}></View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        flex: 1,
    },
    
})
export default Mainhome
