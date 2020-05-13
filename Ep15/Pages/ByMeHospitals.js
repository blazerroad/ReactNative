import React from 'react'
import { View, Text, FlatList, StyleSheet,TouchableOpacity} from 'react-native'

const ByMeHospitals = porps => {
    const dummyData = [
        {
            id: '1',
            title: 'بیمارستان  ۱',
            phoneNo: '۰۲۱۲۲۲۲۲۲۲'
        }
        
    ]
    return (
        <FlatList
            data={dummyData}
            ListHeaderComponent={
                <View style={styles.listHeader}>
                    <Text>...</Text>
                    <Text>شماره تماس</Text>
                    <Text>نام بیمارستان</Text>
                </View>
            }
            renderItem={(itemList) =>
                <TouchableOpacity style={styles.listRow} onPress={() => porps.navigation.navigate("HostpitalDetail",{hospital : itemList.item})}>
                    <Text>...</Text>
                    <Text>{itemList.item.phoneNo}</Text>
                    <Text>{itemList.item.title}</Text>
                </TouchableOpacity>}
            stickyHeaderIndices={[0]}

        />
                    
    )
}
export default ByMeHospitals;
const styles = StyleSheet.create({
    listRow: {
        flexDirection: 'row',
        padding: 10,
        margin: 5,
        backgroundColor: '#ccc',
        justifyContent: 'space-between',
        borderRadius: 10


    },
    listHeader : {
        flexDirection : 'row',
        padding:10,
        justifyContent :'space-between',
        backgroundColor:'white'
    }
})
