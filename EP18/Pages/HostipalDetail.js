import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomText from '../Components/CustomText'
import CustomHeaderButton from '../Components/HeaderButton'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import {useDispatch,useSelector} from 'react-redux'
import {toggleByMe} from '../store/actions/hospitals'

const HostpitalDetail = props => {
    const {navigation} = props
    const dispatch = useDispatch();
    const id = props.route.params.hospital.id;
    const toggleByme = () => {
        dispatch(toggleByMe(id));
    }
    const isByMe = useSelector(i=> i.hospitals.byMeHospitals.some(t=> t.id == id));

    React.useEffect(()=> {
        navigation.setOptions({
            headerRight : ()=>  
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="Menu"  iconName={isByMe ? "ios-star" : "ios-star-outline" } 
                        onPress={toggleByme}
                    />
            </HeaderButtons>
        })
    },[navigation,isByMe])
    return (
        
        <View style={styles.container} >
            <View style={styles.textContainer}>
                <CustomText style={styles.header}>{props.route.params.hospital.title}</CustomText>
            </View>
            <View style={[styles.textContainer,styles.addressContainer]}>
                <CustomText style={{color:'white'}}>{props.route.params.hospital.address}</CustomText>
            </View>
            <View style={[styles.textContainer,styles.phoneNoContainer]}>
                <CustomText>شماره تماس :  {props.route.params.hospital.phoneNo}</CustomText>
            </View>
        </View>
    )
}
export default HostpitalDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
    },
    textContainer: {
        padding: 10,

    },
    addressContainer : {
        backgroundColor : 'olive',
        width:'100%',
        height : 200,
        textAlign:'right',
        justifyContent : 'center',
        alignItems : 'center'
    },
    header: {
        fontSize:35,
        textAlign: 'right'
    },
    phoneNoContainer : {
        justifyContent : 'flex-start',
        width:'100%',
    }
})