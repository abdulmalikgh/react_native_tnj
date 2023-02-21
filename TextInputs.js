import { useState } from "react";
import { View,Text,StyleSheet, TextInput, Button } from "react-native";
import Header from "./Header";

export default function TextInputs() {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    return (
        <View>
          <Header title='Input Text' />
          <View style={styles.container}>
            <Text style={styles.inputText}>Name:</Text>
            <TextInput 
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}
            />
            <Text style={styles.inputText}>Age:</Text>
            <TextInput 
                style={styles.input}
                placeholder="Enter your age"
                value={age}
                onChangeText={setAge}
                keyboardType='numeric'
            />
            <Text style={styles.inputText}>
                Name: {name}
            </Text>
            <Text style={styles.inputText}>
                Age: {age}
            </Text>
          </View>
          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    inputText: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingVertical: 10
    },
    input: {
        borderWidth: 1,
        padding: 10,
        height: 40
    }
})