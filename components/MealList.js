import React from  'react'
import { View, FlatList, StyleSheet } from 'react-native'
import MealItem from './MealItem';

export default function MealList({listData, navigation}){
    function renderMealItem(itemData) {
        return (
          <MealItem
            onSelectMeal={() =>
                navigation.navigate({
                    routeName: "MealDetails",
                    params: {
                      mealId: itemData.item.id,
                    },
                  })}
            itemData={itemData}
          />
        );
      }
    return(
<View style={styles.list}>
      <FlatList
        data={listData}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
    )

}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
})