import React from 'react'
import {TextInput,StyleSheet} from 'react-native'

const CustomInput = props => {
    return (<TextInput {...props} style={{...styles.textInput,...props.style}} />)
}

export default CustomInput;

const styles = StyleSheet.create({
    textInput: {
        margin: 10,
        padding: 10,
        borderBottomColor: "gray",
        borderBottomWidth: 1
    }
})