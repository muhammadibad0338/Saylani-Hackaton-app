import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, ScrollView } from 'react-native'
import { Input, Button } from "react-native-elements";
import { color } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient'
import { db } from "./firebase";

const Donor = ({ navigation }) => {
    const [Fullname, setFullname] = useState("");
    const [Email, setEmail] = useState()
    const [Age, setAge] = useState()
    const [CollegeName, setCollegeName] = useState()
    const [HSC, setHSC] = useState()
    const [Major, setDepartment] = useState()
    const [Gender, setGender] = useState()
    const [Contact, setContact] = useState()

    const submit = async () => {
        await db
            .collection("studentdata")
            .add({
                Fullname,
                Email,
                Age,
                CollegeName,
                HSC,
                Major,
                Gender,
                Contact
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
                <><View style={styles.modals}>
                    <Text style={{ color: 'black', fontSize: 48, fontWeight: 'bold', textAlign: 'center', padding: 5 }}>Complete Student Profile</Text>
                    <View style={styles.view1}>
                        <Input labelStyle={{ color: 'black' }} label="Fullname" containerStyle={styles.inpField} placeholder="Muhammad Ibad" value={Fullname} type="text" autoFocus onChangeText={(val) => setFullname(val)} />
                        <Input labelStyle={{ color: 'black' }} label="Email" containerStyle={styles.inpField} placeholder="mibad0338@gmail.com" value={Email} type="Email" onChangeText={(val) => setEmail(val)} />
                        <Input labelStyle={{ color: 'black' }} label="Age" containerStyle={styles.inpField1} placeholder="21" type="number" value={Age} onChangeText={(val) => setAge(val)} />
                        <Input labelStyle={{ color: 'black' }} label="CollegeName" containerStyle={styles.inpField1} placeholder="Saylani" type="text" value={CollegeName} onChangeText={(val) => setCollegeName(val)} />
                        <Input labelStyle={{ color: 'black' }} label="HSC%" containerStyle={styles.inpField1} placeholder="85.5%" type="number" value={HSC} onChangeText={(val) => setHSC(val)} />
                        <Input labelStyle={{ color: 'black' }} label="Major" containerStyle={styles.inpField1} placeholder="BSCS" type="text" value={Major} onChangeText={(val) => setDepartment(val)} />
                        <Input labelStyle={{ color: 'black' }} label="Gender" containerStyle={styles.inpField1} placeholder="Male" type="text" value={Gender} onChangeText={(val) => setGender(val)} />
                        <Input labelStyle={{ color: 'black' }} label="Contact" containerStyle={styles.inpField1} placeholder="12345" type="number" value={Contact} onChangeText={(val) => setContact(val)} />
                        <Button containerStyle={{ width: '50%', marginBottom: 50 }} buttonStyle={{ backgroundColor: '#29b5e8' }} title="Save" type="solid" onPress={submit} />
                    </View>

                </View>
                </>
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
        alignContent: 'center',
    },
    view1: {
        alignItems: 'center'

    },
    btn: {
        marginBottom: 10,
    },
    inpField1: {
        width: "90%",
    }
})
