import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

export default function CategoryMealScreen( {navigation} ) {
    return (<View style={styles.screen}> 
        <Text>The Category Meal Screen</Text>
        <Button title='Go to MealsDetails!' onPress={()=> {
            navigation.navigate({routeName: 'MealDetails'})}} />
            <Button title='Go back' onPress={() =>{
                navigation.goBack()
            }}/>
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