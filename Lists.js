import { useState } from "react"
import {FlatList, StyleSheet,View,Text, TouchableOpacity } from "react-native"
import Header from "./Header"

const countries = [
    {
        id:1,
        name: 'United States of America'
    },
    {
        id:2,
        name: 'United Kingdom'
    },
    {
        id:3,
        name: 'Argentina'
    },
    {
        id: 4,
        name: 'Portugal'
    },
    {
        id: 5,
        name: 'Ghana'
    }
]

const ListItem = ({name,textColor,background, onPress}) => {
    return  (
        <TouchableOpacity 
            onPress={onPress}
            style={[styles.itemContainer,{backgroundColor:background}]}>
            <Text style={[styles.item,{color:textColor}]}>{name}</Text>
        </TouchableOpacity>
    )
}
export default function Lists() {
    const [selectedCountry, setSelectedCountry] =  useState(null)
    
    const countries = [
        {
            id:1,
            name: 'United States of America'
        },
        {
            id:2,
            name: 'United Kingdom'
        },
        {
            id:3,
            name: 'Argentina'
        },
        {
            id: 4,
            name: 'Portugal'
        },
        {
            id: 5,
            name: 'Ghana'
        }
    ]
    
    return (
        <View>
            <Header title='List of countries' />
            <View style={styles.container}>
                <FlatList 
                    data={countries} 
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => {
                        const background = selectedCountry?.id === item.id ? '#6e3b6e' : '#f9c2ff'
                        const textColor = selectedCountry?.id === item.id ? 'white' : 'black'
                        return <ListItem 
                            onPress={() => setSelectedCountry(item)}
                            background={background}
                            textColor={textColor}
                            name={item.name} 
                        />
                    } }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer:{
        marginTop: 24,
        padding: 10,
        height: 70,
        display:'flex',
        justifyContent:'center'
    },
    item: {
        fontSize: 24,
    },
    container:{
        marginHorizontal:20
    }
})