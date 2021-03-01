import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Input, Button, ListItem } from "react-native-elements";
import { db } from "./firebase";


const CompanyHome = ({ navigation }) => {
    const [std, setstd] = useState([])
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: "Campus Recruitment System",
            headerStyle: { backgroundColor: "#29b5e8" },
            headerTitleStyle: { backgroundColor: "black" },
            headerTinColor: "balck",
            headerLeft: () => {
                <View style={{ marginLeft: 10 }}>
                    <Button title="Logout" />
                </View>
            }
        })
    }, [])
    const [listitem, setlistitem] = useState([])
    const [arr, setarr] = useState([])


    useEffect(() => {
        db.collection("studentdata").onSnapshot(snapshot => (
            setlistitem(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        ))
    }, [])

    return (
        <>
            <View style={styles.header}>

                <Text style={{ color: '#29b5e8', fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginLeft: "10%" }}>Profiles of Students</Text>


            </View>

            <ScrollView style={{ maxHeight: "85%" }}>
                {
                    listitem.map((val, id) => {
                        return (
                            <ListItem key={id} bottomDivider >
                                <ListItem.Content
                                    style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>

                                    <View>
                                        <Text style={{ marginBottom: 5, fontWeight: 'bold', color: '#000', fontSize: 20, letterSpacing: 1, textTransform: 'capitalize' }}>
                                            Name : {val.data.Fullname}
                                        </Text>
                                        <Text style={{ fontWeight: 'bold', color: 'blue', textTransform: 'lowercase', fontSize: 18 }} >E-mail : {val.data.Email}</Text>
                                        <Text style={{ fontWeight: 'bold', color: 'black', textTransform: 'uppercase' }}>Age :
                                 <Text style={{ fontWeight: '100', fontSize: 17, textTransform: 'capitalize', color: "blue" }}> {val.data.Age}</Text>  </Text>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>College :
                                 <Text style={{ fontWeight: '100', fontSize: 17, textTransform: 'capitalize', color: "blue" }}> {val.data.CollegeName}</Text>  </Text>
                                            <Text style={{ marginTop: 5, fontSize: 18, fontWeight: 'bold', color: '#000' }}>College Aggregate :
                                 <Text style={{ fontSize: 17, textTransform: 'capitalize', color: "blue", fontWeight: "100" }}>
                                                    {" " + val.data.HSC}
                                                </Text>
                                            </Text>

                                            <Text style={{ marginTop: 5, fontSize: 18, fontWeight: 'bold', color: '#000' }}>Major :
                                 <Text style={{ fontSize: 17, textTransform: 'capitalize', color: "blue", fontWeight: "100" }}>
                                                    {" " + val.data.Major}
                                                </Text>
                                            </Text>
                                            <Text style={{ marginTop: 5, fontSize: 18, fontWeight: 'bold', color: '#000' }}>Sex :
                                 <Text style={{ fontSize: 17, textTransform: 'capitalize', color: "blue", fontWeight: "100" }}>
                                                    {" " + val.data.Gender}
                                                </Text>
                                            </Text>
                                            <Text style={{ marginTop: 5, fontSize: 18, fontWeight: 'bold', color: '#000' }}>Contact No :
                                 <Text style={{ fontSize: 17, textTransform: 'capitalize', color: "blue", fontWeight: "100" }}>
                                                    {" " + val.data.Contact}
                                                </Text>
                                            </Text>
                                        </View>
                                    </View>

                                </ListItem.Content>
                            </ListItem>
                        )
                    })
                }
            </ScrollView>
            {/* <View style={styles.btnView}>
             <View style={{ flex: 1, flexDirection: "row", justifyContent:'space-around' }}>
             </View>
         </View> */}

         <Button  onPress={() => navigation.navigate("companyadpost")} 
                 containerStyle={styles.donor} title="Add a Job" titleStyle={{color:'blue', fontSize:17,fontWeight:'bold'}} type="outline" />


        </>
    )
}

export default CompanyHome

const styles = StyleSheet.create({
    inpField: {
        width: "45%"
    },
    view1: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        maxHeight: 70,

    },
    btn: {
        marginBottom: 10
    },
    inpField1: {
        width: "90%",
    }
})
