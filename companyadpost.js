import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, ScrollView } from 'react-native'
import { Input, Button } from "react-native-elements";
import { color } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient'
import { db } from "./firebase";

const Donor = ({ navigation }) => {
    const [Companyname, setCompanyname] = useState("");
    const [title, setjobprofile] = useState()
    const [pay, setsalary] = useState()
    const [Requirements, seteligibilityCriteria] = useState()
    const [Email, setEmail] = useState()

    const submit = async () => {
        await db
            .collection("jobpost")
            .add({
                Companyname,
                title,
                pay,
                Requirements,
                Email,
            })
            .then(() => {
                navigation.goBack();
                alert("Data Saved!")
            })
            .catch(error => alert(error))
    };

    return (
        <ScrollView style={{ maxHeight: "100%" }}>
            <LinearGradient
                colors={['#29b5e8', 'white']}
                style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <View style={styles.modals}>
                    <Text style={{ color: 'black', fontSize: 48, fontWeight: 'bold', textAlign: 'center' }}>Post A Vacancy</Text>
                    <View style={styles.view1}>
                        <Input labelStyle={{ color: 'black' }} label="Company Name" containerStyle={styles.inpField} placeholder="Muhammad ibad" value={Companyname} type="text" autoFocus onChangeText={(val) => setCompanyname(val)} />
                        <Input labelStyle={{ color: 'black' }} label="Title of job" containerStyle={styles.inpField} placeholder="senior developer" value={title} type="text" onChangeText={(val) => setjobprofile(val)} />
                        <Input labelStyle={{ color: 'black' }} label="Pay" containerStyle={styles.inpField1} placeholder="30000" type="number" value={pay} onChangeText={(val) => setsalary(val)} />
                        <Input labelStyle={{ color: 'black' }} label="Requirements" containerStyle={styles.inpField1} placeholder="bachelor's" type="text" value={Requirements} onChangeText={(val) => seteligibilityCriteria(val)} />
                        <Input labelStyle={{ color: 'black' }} label="Email" containerStyle={styles.inpField1} placeholder="ibad.com" type="Email" value={Email} onChangeText={(val) => setEmail(val)} />
                        <Button containerStyle={{ width: '50%' }} buttonStyle={{ backgroundColor: '#29b5e8' }} title="Save" type="solid" onPress={submit} />
                    </View>

                </View>
            </LinearGradient>
        </ScrollView>
    )
}

export default Donor

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    inpField: {
        width: "90%"
    },
    modals: {
        flex: 1,
        justifyContent: 'center',
        // alignItems:'center',
        alignContent: 'center',
    },
    view1: {
        // flex: 1,
        alignItems: 'center',
        // marginTop: 10,
        // maxHeight:70,

    },
    btn: {
        marginBottom: 10,
    },
    inpField1: {
        width: "90%",
    }
})
