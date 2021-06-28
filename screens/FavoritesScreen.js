import React from 'react'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

export default function FavoritesScreen({navigation}) {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return (
    <MealList listData={favMeals} navigation={navigation} />
    )
}

FavoritesScreen.navigationOptions = (navData) => {
    return {
      headerTitle: "Your Favorites",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="menu"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
    };
  };
  
