import React from 'react'
import {View,StyleSheet} from 'react-native'

const Card = props => {
    return (  <View style={{...styles.form,...props.style}}>
        {props.children}
    </View>);
}

export default Card;

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#ddd',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'stretch',
        shadowColor:'black',
        shadowOffset: {width:0, height:5},
        shadowOpacity:5,
        shadowRadius:6,
        elevation:10,
    }
})