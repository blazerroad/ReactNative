import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Dashboard = porps => {
    return (
        <View style={styles.container} >
            <View style={styles.item}>
                <TouchableOpacity style={[styles.touchable,{backgroundColor:'yellow'}]} onPress={() => porps.navigation.navigate("Hospitals")} >
                    <Text>بیمارستان ها</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.item}>
                <TouchableOpacity  style={[styles.touchable,{backgroundColor:'red'}]}  onPress={() => porps.navigation.navigate("Hospitals")} >
                    <Text>فرم سنجش</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.item}>
                <TouchableOpacity  style={[styles.touchable,{backgroundColor:'blue'}]}  onPress={() => porps.navigation.navigate("Hospitals")} >
                    <Text>داروخانه ها</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.item}>
                <TouchableOpacity  style={[styles.touchable,{backgroundColor:'green'}]}  onPress={() => porps.navigation.navigate("Hospitals")} >
                    <Text>اخبار</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.item}>
                <TouchableOpacity  style={styles.touchable}  onPress={() => porps.navigation.navigate("Hospitals")} >
                    <Text>1</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.item}>
                <TouchableOpacity  style={styles.touchable}  onPress={() => porps.navigation.navigate("Hospitals")} >
                    <Text>1</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default Dashboard;

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'

    },
    item: {
        height: 200,
        width: '50%',
        padding:10
    },
    touchable : {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'gray',
        flex:1,
        borderRadius:10,
    }
});
