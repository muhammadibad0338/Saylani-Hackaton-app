import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Modal , TouchableOpacity} from 'react-native'
import { auth, db } from "../../firebase";
import { Button, ListItem } from "react-native-elements";


const Home = ({ navigation }) => {
    const [listitem, setlistitem] = useState([])
    const [modal, setmodal] = useState(false)
   
    const [arr, setarr] = useState([])
    const Logout = () => {
        auth.signOut().then(() => {
            navigation.replace('CompanyLogin');
        })
    }
    useEffect(() => {
        db.collection("studentProfile").onSnapshot(snapshot => (
            setlistitem(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        ))
        db.collection("studentProfile").onSnapshot(snapshot => (
            setarr(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        ))
    }, [])

    return (
        <>

        <View style={styles.header}>
            {/* <Text style={{marginTop:10,fontSize:20,marginLeft:10,color:'#B22222',fontWeight:'bold'}}>Hi, <Text style={{color:'#000',textTransform:'capitalize'}}>{auth?.currentUser.displayName}</Text></Text>
            <TouchableOpacity activeOpacity={0.5}
            onPress={Logout}
            style={{borderRadius:1,borderWidth:1,
            borderColor:'#B22222',backgroundColor:'#fff',
            fontSize:18,
            width:"30%",alignItems:'center',
            height:90,
            color:'#fff' }}
            ><Text style={{fontSize:18,fontWeight:'bold',color:'#B22222',alignItems:'center',justifyContent:'center',paddingTop:10}}>Logout</Text></TouchableOpacity> */}
       
        
        <Text style={{ color: '#B22222' , fontSize:32, fontWeight:'bold' ,textAlign:'center',marginLeft:"10%"}}>Profiles of Students</Text>

        </View>

        <ScrollView style={{ maxHeight: "85%" }}>
            {
                listitem.map((val, id) => {
                    return (
                        <ListItem key={id} bottomDivider >
                        <ListItem.Content 
                        style={{ flex: 1, flexDirection: "row", justifyContent: "space-between"}}>
                           
                            <View>
                                <Text style={{ marginBottom: 5 ,fontWeight:'bold',color:'#000',fontSize:28,letterSpacing:1,textTransform:'capitalize'}}>
                                    {val.data.Fullname}
                                </Text>
                                <Text style={{fontWeight:'bold',color:'#B22222',textTransform:'lowercase',fontSize:18}} >{val.data.Email}</Text>
                                <Text style={{fontWeight:'bold',color:'black',textTransform:'uppercase'}}>Age :
                                <Text style={{fontWeight:'100',fontSize:17, textTransform:'capitalize',color:"#B33333"}}> {val.data.Age}</Text>  </Text> 
                                <View style={{flex:1}}>
                                <Text style={{fontWeight:'bold',color:'black',fontSize:18}}>College :   
                                <Text style={{fontWeight:'100',fontSize:17, textTransform:'capitalize',color:"#B33333"}}> {val.data.CollegeName}</Text>  </Text>
                                <Text style={{ marginTop: 5 , fontSize:18 , fontWeight:'bold',color:'#000'}}>College Aggregate :  
                                <Text style={{fontSize:17, textTransform:'capitalize',color:"#B33333",fontWeight:"100"}}> 
                                            {" " + val.data.HSC}
                                </Text> 
                                </Text>
                                <Text style={{ marginTop: 5 , fontSize:18 , fontWeight:'bold',color:'#000'}}>University : 
                                <Text style={{fontSize:17, textTransform:'capitalize',color:"#B33333",fontWeight:"100"}}> 
                                            {" " + val.data.UniversityName}
                                </Text> 
                                </Text>
                                <Text style={{ marginTop: 5 , fontSize:18 , fontWeight:'bold',color:'#000'}}>University CGPA : 
                                <Text style={{fontSize:17, textTransform:'capitalize',color:"#B33333",fontWeight:"100"}}> 
                                            {" " + val.data.CGPA}
                                </Text> 
                                </Text>
                                <Text style={{ marginTop: 5 , fontSize:18 , fontWeight:'bold',color:'#000'}}>Major : 
                                <Text style={{fontSize:17, textTransform:'capitalize',color:"#B33333",fontWeight:"100"}}> 
                                            {" " + val.data.Department}
                                </Text> 
                                </Text>
                                <Text style={{ marginTop: 5 , fontSize:18 , fontWeight:'bold',color:'#000'}}>Gender : 
                                <Text style={{fontSize:17, textTransform:'capitalize',color:"#B33333",fontWeight:"100"}}> 
                                            {" " + val.data.Gender}
                                </Text> 
                                </Text>
                                <Text style={{ marginTop: 5 , fontSize:18 , fontWeight:'bold',color:'#000'}}>Contact No :  
                                <Text style={{fontSize:17, textTransform:'capitalize',color:"#B33333",fontWeight:"100"}}> 
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
        <View style={styles.btnView}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent:'space-around' }}>
                <Button  onPress={() => navigation.navigate("Vacancy")} 
                containerStyle={styles.donor} title="Post A Vacancy" titleStyle={{color:'#B22222', fontSize:17,fontWeight:'bold'}} type="outline" />
            </View>
        </View>
    </>
    )
}

export default Home

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        maxHeight: "7.5%",
        borderBottomColor:"#B22222",
        borderBottomWidth:1,
        textAlign:'center'

    },
    modals:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    donor: {
        width: '49%',
        borderColor:'#B22222',
        borderWidth:2
        },
    btnView: {
        marginBottom: 0,
        flex: 1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems: "center",
        maxHeight: "7.5%",
        backgroundColor:'#fff'

    }
})
