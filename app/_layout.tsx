import { Link, router, Slot } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons';

const RootLayout = () => {
  return (
    <View className='relative w-full flex-1'>
        <Slot />
        <View className='w-full px-5
         absolute h-16 bottom-0 left-0 z-50 bg-gray-300 flex-row items-center justify-between'>
            <TouchableOpacity onPress={() => router.navigate('')} className='items-center'>
                <Ionicons name="home-outline" size={24} color="black" />
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate('/product')} className='items-center'>
                <Ionicons name="logo-dropbox" size={24} color="black" />
                <Text>Product</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate('/category')} className='items-center'>
                <Ionicons name="grid-outline" size={24} color="black" />
                <Text>Category</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate('/profile')} className='items-center'> 
                <Ionicons name="person-outline" size={24} color="black" />
                <Text>Profile</Text>
            </TouchableOpacity>
        </View>
    </View>
    
  )
}

export default RootLayout