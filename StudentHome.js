import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { auth, db } from "./firebase";
import { Avatar, Button, ListItem } from "react-native-elements"
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient'




const StudentHome = ({ navigation }) => {
    const [listitem, setlistitem] = useState([])
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: "Campus Recruitment System",
            headerStyle: { backgroundColor: "#29b5e8" },
            headerTitleStyle: { backgroundColor: "black" },
            headerTinColor: "black",
            headerLeft: () => {
                <View style={{ marginLeft: 10 }}>
                    <Button title="Logout" />
                </View>
            }
        })
    }, [])

    const Logout = () => {
        auth.signOut().then(() => {
            navigation.replace('Student');
        })
    }
    useEffect(() => {
        db.collection("jobpost").onSnapshot(snapshot => (
            setlistitem(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        ))

    }, [])

    return (
        <>
            
                <View style={styles.header}>
                    <Text style={{ marginTop: 5, fontSize: 20, marginLeft: 5 }}>Welcome {auth?.currentUser?.displayName}</Text>
                    <Button onPress={Logout} style={{ width: 135, }} title="Log Out" type="outline" />
                    {/* <Button onPress={() => navigation.navigate("studentComplteData")}
                    containerStyle={styles.donor} title="Add Your Complete Data" titleStyle={{ color: '#B22222', fontSize: 17, fontWeight: 'bold' }} type="outline" /> */}
                </View>


                <ScrollView style={{ maxHeight: "85%" }}>
                <LinearGradient
                colors={['#29b5e8', 'white']}
                style={styles.cont}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                    {
                        listitem.map((val, id) => {
                            return (
                                <ListItem key={id} bottomDivider >
                                    <ListItem.Content
                                        style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>

                                        <View>
                                            <Text style={{ marginBottom: 5, fontWeight: 'bold', color: '#000', fontSize: 20, letterSpacing: 1, textTransform: 'capitalize' }}>
                                                Company Name : {val.data.Companyname}
                                            </Text>
                                            <Text style={{ fontWeight: 'bold', color: '#B22222', textTransform: 'lowercase', fontSize: 18 }} > Email : {val.data.Email}</Text>
                                            <Text style={{ fontWeight: 'bold', color: 'black', textTransform: 'uppercase' }}>Designation :
                                    <Text style={{ fontSize: 17, textTransform: 'capitalize', color: "#B33333" }}> {val.data.title}</Text>  </Text>
                                            <View style={{ flex: 1 }}>
                                                <Text style={{ fontWeight: '600', color: 'black', fontSize: 18 }}>Pay:
                                    <Text style={{ fontSize: 17, textTransform: 'capitalize', color: "#B33333" }}> {val.data.pay}</Text>  </Text>
                                                <Text style={{ marginTop: 5, fontSize: 18, fontWeight: 'bold', color: '#000' }}>Criteria:
                                    <Text style={{ fontSize: 17, textTransform: 'capitalize', color: "#B33333", fontWeight: "100" }}> {val.data.Requirements}</Text>
                                                </Text>
                                            </View>
                                        </View>

                                    </ListItem.Content>
                                </ListItem>
                            )
                        })
                    }
                    </LinearGradient>
                </ScrollView>

                <Button onPress={() => navigation.navigate("studentComplteData")}
                    containerStyle={styles.donor} title="Add Your Complete Data" titleStyle={{ color: 'blue', fontSize: 17, fontWeight: 'bold' }} type="outline" />
        
        </>
    )
}

export default StudentHome

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        maxHeight: "7.5%",
        borderBottomColor: "#29b5e8",
        borderBottomWidth: 1

    },
    con: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
})
