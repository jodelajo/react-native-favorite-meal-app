import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

export default function MealDetailScreen( { navigation }) {
    return (<View style={styles.screen}> 
        <Text>The Meal Detail Screen</Text>
        <Button title='Go back to categories' onPress={() => {
            navigation.popToTop()
        }} />
    </View>

    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})