import { StyleSheet,View,Text } from "react-native"
export default function Header({ title }) {

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
        )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor:'pink',
        padding: 30
      },
      headerText: {
        color:'#000',
        fontWeight: 'bold',
        textAlign:'center',
        fontSize: 24
      }
})