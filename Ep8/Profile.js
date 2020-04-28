import React, { useReducer} from 'react'
import { View, Text, StyleSheet, TextInput, Switch, Picker, Button } from 'react-native'

const initialState = {
    name: {
        value: '',
        isValid: false,
        errorMessage: 'نام را وارد نمایید'
    },
    age: {
        value: '',
        isValid: false,
        errorMessage: 'سن را وارد نمایید'
    },
    isEnable: false,
    gender: "F"
}
const ON_INPUT_CHANGE = "onInputChange";
const reducer = (state, action) => {
    switch (action.type) {
        case ON_INPUT_CHANGE:
            return { ...state, [action.tag]: action.changedValue };
        default:
            break;
    }
}
const Profile = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const required = (value, tag) => {
        var isValid = value.length != 0 ;
        dispatch({type : ON_INPUT_CHANGE,tag : tag , changedValue : {...state[tag], value : value , isValid : isValid} })
    }
    const valueChange = (value,tag) => {
        dispatch({type : ON_INPUT_CHANGE,tag: tag, changedValue : value})
    }
    const sumbitForm = () => {
        if(!(state.name.isValid && state.age.isValid))
        {
            console.log("false");
            return;
        }
        console.log("true");
    }
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput placeholder="نام" style={styles.textInput} value={state.name.value} onChangeText={text => required(text, "name")} />
                {!state.name.isValid && <Text style={styles.errorText}>{state.name.errorMessage}</Text>}
                <TextInput placeholder="سن" keyboardType='numeric' style={styles.textInput} value={state.age.value} onChangeText={text => required(text, "age")} />
                {!state.age.isValid && <Text style={styles.errorText} >{state.age.errorMessage}</Text>}
                <View style={styles.genderContainer}>
                    <Switch value={state.isEnable} onValueChange={value => valueChange(value,"isEnable")} />
                    <Text>سرپرست</Text>
                </View>
                <Text style={{ textAlign: 'center', margin: 10 }}>جنسیت</Text>
                <Picker style={styles.picker} itemStyle={styles.itemPicker}
                    selectedValue={state.gender}
                    onValueChange={value => valueChange(value,"gender")}
                >
                    <Picker.Item value="F" label="زن" />
                    <Picker.Item value="M" label="مرد" />
                </Picker>
                <Button title="ذخیره" onPress={sumbitForm} />
            </View>
        </View>
    )
}
export default Profile;
const styles = StyleSheet.create({
    errorText : 
    {
        color : 'red',
        textAlign : 'center'
    },
    container:
    {
        alignItems: 'center'
    },
    form: {
        width: '80%',
        backgroundColor: '#ddd',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    textInput: {
        textAlign: 'center',
        margin: 10,
        padding: 10,
        borderBottomColor: "gray",
        borderBottomWidth: 1
    },
    genderContainer:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    picker:
    {
        height: 88,
    },
    itemPicker: {
        height: 44
    }

})
