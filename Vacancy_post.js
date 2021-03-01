import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal } from 'react-native'
import { Input, Button } from "react-native-elements";
import { color } from 'react-native-reanimated';
import { db } from "./firebase";

const Donor = ({navigation}) => {
    const [Companyname, setCompanyname] = useState("");
    const [jobprofile, setjobprofile] = useState()
    const [salary, setsalary] = useState()
    const [eligibilityCriteria, seteligibilityCriteria] = useState()
    const [Email, setEmail] = useState()

    const submit = async ()=>{
        await db
        .collection("list")
        .add({
            Companyname,
            jobprofile,
            salary,
            eligibilityCriteria,
            Email,
        })
        .then(()=>{
            navigation.goBack();
          alert("Data Saved!")
        })
        .catch(error=>alert(error))
    };

    return (
        <><View style={styles.modals}>
            <Text style={{color:'#B22222',fontSize:48,fontWeight:'bold',textAlign:'center'}}>Post A Vacancy</Text>
            <View style={styles.view1}>
                <Input labelStyle={{color:'#B22222'}}  label="Companyname" containerStyle={styles.inpField} placeholder="Tulaib" value={Companyname} type="text" autoFocus onChangeText={(val) => setCompanyname(val)} />
                <Input labelStyle={{color:'#B22222'}}  label="Jobprofile" containerStyle={styles.inpField} placeholder="0300200002" value={jobprofile} type="text" onChangeText={(val) => setjobprofile(val)} />
                <Input labelStyle={{color:'#B22222'}}  label="Salary" containerStyle={styles.inpField1} placeholder="tulaib@gmail.com" type="number" value={salary} onChangeText={(val) => setsalary(val)} />
                <Input labelStyle={{color:'#B22222'}}  label="EligibilityCriteria" containerStyle={styles.inpField1} placeholder="tulaib@gmail.com" type="text" value={eligibilityCriteria} onChangeText={(val) => seteligibilityCriteria(val)} />
                <Input labelStyle={{color:'#B22222'}}  label="Email" containerStyle={styles.inpField1} placeholder="tulaib@gmail.com" type="Email" value={Email} onChangeText={(val) => setEmail(val)} />
                <Button containerStyle={{width:'50%'}} buttonStyle={{backgroundColor:'#B22222'}} title="Save" type="solid" onPress={submit} />
            </View>
         
            </View>
        </>
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
