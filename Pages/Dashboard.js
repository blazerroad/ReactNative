import React from 'react'
import {View, Text,Button} from 'react-native'

const Dashboard = porps => {
    return (
        <View>
            <Text>صحفه داشبورد</Text>
            <Button title="بیمارستان ها"  onPress={() => porps.navigation.navigate('Hospitals')} />
        </View>
    )
}
export default Dashboard;