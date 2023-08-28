import { View, Text } from "react-native";
import React from "react";
import { Stack, withLayoutContext } from "expo-router";

//Initialzing the drawer
import { createDrawerNavigator } from "@react-navigation/drawer";

const DrawerNavigator = createDrawerNavigator().Navigator;

const Drawer = withLayoutContext(DrawerNavigator);

export default function DrawerLayout() {
  return <Drawer />;
}
