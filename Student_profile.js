import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal ,ScrollView} from 'react-native'
import { Input, Button } from "react-native-elements";
import { color } from 'react-native-reanimated';
import { db } from "./firebase";

const Donor = ({navigation}) => {
    const [Fullname, setFullname] = useState("");
    const [Email, setEmail] = useState()
    const [Age, setAge] = useState()
    const [CollegeName, setCollegeName] = useState()
    const [HSC, setHSC] = useState()
    const [UniversityName, setUniversityName] = useState()
    const [CGPA, setCGPA] = useState()
    const [Department, setDepartment] = useState()
    const [Gender, setGender] = useState()
    const [Contact, setContact] = useState()

    const submit = async ()=>{
        await db
        .collection("studentdata")
        .add({
            Fullname,
            Email,
            Age,
            CollegeName,
            HSC,
            UniversityName,
            CGPA,
            Department,
            Gender,
            Contact
        })
        .then(()=>{
            navigation.goBack();
          alert("Data Saved!")
        })
        .catch(error=>alert(error))
    };

    return (
        <ScrollView style={{ maxHeight: "100%" }}>

        <><View style={styles.modals}>
            <Text style={{color:'#B22222',fontSize:48,fontWeight:'bold',textAlign:'center',padding:5}}>Complete Student Profile</Text>
            <View style={styles.view1}>
                <Input labelStyle={{color:'#B22222'}}  label="Fullname" containerStyle={styles.inpField} placeholder="Tulaib Ahmed" value={Fullname} type="text" autoFocus onChangeText={(val) => setFullname(val)} />
                <Input labelStyle={{color:'#B22222'}}  label="Email" containerStyle={styles.inpField} placeholder="tulaib@gmail.com" value={Email} type="Email" onChangeText={(val) => setEmail(val)} />
                <Input labelStyle={{color:'#B22222'}}  label="Age" containerStyle={styles.inpField1} placeholder="21" type="number" value={Age} onChangeText={(val) => setAge(val)} />
                <Input labelStyle={{color:'#B22222'}}  label="CollegeName" containerStyle={styles.inpField1} placeholder="Adam Jee College" type="text" value={CollegeName} onChangeText={(val) => setCollegeName(val)} />
                <Input labelStyle={{color:'#B22222'}}  label="HSC%" containerStyle={styles.inpField1} placeholder="85.5%" type="number" value={HSC} onChangeText={(val) => setHSC(val)} />
                <Input labelStyle={{color:'#B22222'}}  label="UniversityName" containerStyle={styles.inpField1} placeholder="Sir Syed University" type="Sir Syed University" value={UniversityName} onChangeText={(val) => setUniversityName(val)} />
                <Input labelStyle={{color:'#B22222'}}  label="CGPA" containerStyle={styles.inpField1} placeholder="85.5%" type="number" value={CGPA} onChangeText={(val) => setCGPA(val)} />
                <Input labelStyle={{color:'#B22222'}}  label="Department" containerStyle={styles.inpField1} placeholder="BSCS" type="text" value={Department} onChangeText={(val) => setDepartment(val)} />
                <Input labelStyle={{color:'#B22222'}}  label="Gender" containerStyle={styles.inpField1} placeholder="Male" type="text" value={Gender} onChangeText={(val) => setGender(val)} />
                <Input labelStyle={{color:'#B22222'}}  label="Contact" containerStyle={styles.inpField1} placeholder="03002321123" type="number" value={Contact} onChangeText={(val) => setContact(val)} />
                <Button containerStyle={{width:'50%',marginBottom:50}} buttonStyle={{backgroundColor:'#B22222'}} title="Save" type="solid" onPress={submit} />
            </View>
         
            </View>
        </>
        </ScrollView>
    )
}

export default Donor

const styles = StyleSheet.create({
    inpField: {
        width: "90%"
    },
    modals:{
        flex:1,
        justifyContent:'center',
        // alignItems:'center',
        alignContent:'center',
        backgroundColor:'#fff'
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
    inpField1:{
        width:"90%",
    }
})
