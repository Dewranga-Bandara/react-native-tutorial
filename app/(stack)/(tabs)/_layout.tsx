import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { router, Tabs, useNavigation } from 'expo-router'
import { View, Text, TouchableOpacity } from 'react-native'

const TabLayout = () => {
  return (
    <Tabs screenOptions={{
        headerLeft: () => 
            <TouchableOpacity className='ml-4' onPress={() => {router.back()}}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>,
        headerTitleAlign: 'center',
        headerStyle:{
            backgroundColor: 'rgb(209 213 219) ',
        },
        tabBarLabelStyle: {marginTop: 5},
        tabBarIconStyle: {marginBottom: -7},
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'grey',
    }}>
        <Tabs.Screen 
            name="index"
            options={{
                headerLeft: () => <IndexHeaderLeftIcon/>,
                title: 'Home',
                headerTitleAlign: 'center',
                // tabBarLabel: 'Dew',
                tabBarIcon: ({color, size}) => 
                    <FontAwesome name="home" size={size} color={color} />
            }}
         />
         <Tabs.Screen 
            name='setting1'
            options={{
                title: 'Setting1',
                tabBarIcon: ({color, size}) => 
                    <FontAwesome name="gear" size={size} color={color} />
            }}
         />
         <Tabs.Screen 
            name='setting2'
            options={{
                title: 'Setting2',
                tabBarIcon: ({color, size}) => 
                    <FontAwesome name="gear" size={size} color={color} />
            }}
         />
         <Tabs.Screen 
            name='setting3'
            options={{
                title: 'Setting3',
                tabBarIcon: ({color, size}) => 
                    <FontAwesome name="gear" size={size} color={color} />
            }}
         />
    </Tabs>
  )
}

export default TabLayout

const IndexHeaderLeftIcon = () => {
  
    // const {drawer} = useDrawer()
  
    const navigation = useNavigation<DrawerNavigationProp<{}>>()
    // console.log(navigation)
  
    return (
      // <TouchableOpacity onPress={() => drawer?.current?.openDrawer()}>
      <TouchableOpacity className='ml-4' onPress={() => {navigation.openDrawer()}}>
          <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>
    )
  }