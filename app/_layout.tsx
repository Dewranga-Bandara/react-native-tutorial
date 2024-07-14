import { Link, router, Slot, Stack } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons';
import Footer from '@/layouts/footer';
import DrawerProvider from '@/context/context-hooks/drawer';
import useDrawer from '@/context/context-hooks/useDrawer';

const RootLayout = () => {

  return (
    <DrawerProvider>
      <View className='relative w-full flex-1'>
        <Stack screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'rgb(209 213 219)',
          }
        }}>
          <Stack.Screen 
            name='index' 
            options={{
              headerLeft: () => <IndexHeaderLeftIcon/>,
              title: 'Home',
            }}
          />
          <Stack.Screen 
            name='product/index'
            options={{
              title: 'Product'
            }}
          />
          <Stack.Screen 
            name='product/[productId]'
            options={{
              title: 'Single Product'
            }}
          />
          <Stack.Screen 
            name='category'
            options={{
              title: 'Category'
            }}
          />
          <Stack.Screen 
            name='profile'
            options={{
              title: 'Profile'
            }}
          />
          <Stack.Screen 
            name='products'
            options={{
              title: 'Products'
            }}
          />
        </Stack>
          {/* <Slot /> */}
          {/* <Footer/> */}
      </View>
    </DrawerProvider>
    
  )
}

export default RootLayout

const IndexHeaderLeftIcon = () => {
  const {drawer} = useDrawer()
  return (
    <TouchableOpacity onPress={() => drawer?.current?.openDrawer()}>
        <Ionicons name="menu" size={24} color="black" />
    </TouchableOpacity>
  )
}