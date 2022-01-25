import * as React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/HomeScreen';
import Post from '../screens/PostScreen';
import CustomSidebarMenu from "../screens/CustomSidebarMenu";
import Ionicons from "react-native-vector-icons/Ionicons";
const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=>{
    return(
       <Drawer.Navigator
       drawerContentOptions={{
        activeTintColor: "#e91e63",
        inactiveTintColor: this.state.light_theme ? "black" : "#1e4ae9",
        itemStyle: { marginVertical: 5 }
      }}
      drawerContent={props => <CustomSidebarMenu {...props} />}
       >
           <Drawer.Screen name="Home" component={Home} style={styles.container}></Drawer.Screen>
           <Drawer.Screen name="Post" component={Post} style={styles.container}></Drawer.Screen>
       </Drawer.Navigator> 
    )
}
export default DrawerNavigator();

const styles = styleSheet.create({
 container:{
     backgroundColor:"#BFFF00",
    outerWidth:15,
    outerHeigth:15,
 },
})