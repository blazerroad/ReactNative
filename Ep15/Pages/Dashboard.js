import React, { useState, useEffect } from 'react'
import {
    View, Text, StyleSheet,
    TouchableOpacity, Image, ScrollView, Dimensions
} from 'react-native'
import publicStyles from '../Constants/PublicStyles'
import { AntDesign } from '@expo/vector-icons';

import CustomText from '../Components/CustomText'
const Dashboard = porps => {
    const [widthNewSize, setWidthNewSize] = useState(Dimensions.get('window').width);
    const [hieghtNewSize, setHeightNewSize] = useState(Dimensions.get('window').height);


    const dimensionImageContainer = {
        width: widthNewSize / 7,
        height: widthNewSize / 7,
        borderRadius: widthNewSize / 7 / 2,
    }
    const dimensionItem = {
        height: hieghtNewSize < 350 ? 110 : 200
    }
    useEffect(() => {
        const onDimensionChange = () => {
            setWidthNewSize(Dimensions.get('window').width);
            setHeightNewSize(Dimensions.get('window').height)
        }
        Dimensions.addEventListener("change", onDimensionChange)
        return () => Dimensions.removeEventListener("change", onDimensionChange);
    })

    return (
        <ScrollView>
            <View style={styles.container} >
                <View style={[styles.item, dimensionItem]}>
                    <TouchableOpacity style={[styles.touchable, { backgroundColor: 'yellow' }]}
                     onPress={() => porps.navigation.navigate("HospitalsTab")} >
                        <View style={[styles.imageContainer, dimensionImageContainer]}>
                            <Image source={require('../assets/hospitals.png')} style={{ width: 60, height: 60 }}
                                resizeMode='cover' />
                        </View>
                        <Text style={{ fontFamily: 'Dirooz' }}>بیمارستان ها</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.item, dimensionItem]}>
                    <TouchableOpacity style={[styles.touchable, { backgroundColor: 'red' }]} onPress={() => porps.navigation.navigate("Hospitals")} >
                        <CustomText>فرم سنجش</CustomText>
                    </TouchableOpacity>
                </View>
                <View style={[styles.item, dimensionItem]}>
                    <TouchableOpacity style={[styles.touchable, { backgroundColor: 'blue' }]} onPress={() => porps.navigation.navigate("Hospitals")} >
                        <View style={[styles.imageContainer, dimensionImageContainer]}>
                            <Image source={{ uri: 'https://static.thenounproject.com/png/2105476-200.png' }}
                                style={{ width: 40, height: 40 }}
                                resizeMode='cover' />
                        </View>
                        <CustomText>داروخانه ها</CustomText>
                    </TouchableOpacity>
                </View>
                <View style={[styles.item, dimensionItem]}>
                    <TouchableOpacity style={[styles.touchable, { backgroundColor: 'green' }]} onPress={() => porps.navigation.navigate("Hospitals")} >
                        <Text style={publicStyles.text}>اخبار</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.item, dimensionItem]}>
                    <TouchableOpacity style={styles.touchable} onPress={() => porps.navigation.navigate("Profile")} >
                        <View style={[styles.imageContainer, dimensionImageContainer]}>
                            <AntDesign name="profile" size={40} color="blue" />
                        </View>
                        <Text>پروفایل</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.item, dimensionItem]}>
                    <TouchableOpacity style={styles.touchable} onPress={() => porps.navigation.navigate("Hospitals")} >
                        <Text>1</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}

export default Dashboard;


const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'

    },
    item: {

        width: '50%',
        padding: 10
    },
    touchable: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        flex: 1,
        borderRadius: 10,
    },
    imageContainer: {

        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

