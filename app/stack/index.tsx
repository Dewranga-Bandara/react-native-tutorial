import { View, Text, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import Header from '@/layouts/header'
import { Ionicons } from '@expo/vector-icons'
import Nav from '@/layouts/nav'
import useDrawer from '@/context/context-hooks/useDrawer'

const Index = () => {

  const {drawer} = useDrawer()

  return (
      <View className='w-full flex-1'>
        {/* <Header 
          Left={
            <TouchableOpacity onPress={() => {drawer?.current?.openDrawer()}}>
            <Ionicons name="menu" size={27} color="black" />
          </TouchableOpacity>
          } 
          centerText='Home'
        />  */}
        <Text className='text-5xl font-bold text-green-700'>Index</Text>
        <Link href={'/stack/category'}>Category</Link>
        <Link href={'/stack/products'}>Products</Link>
        <Link href={{
          pathname: '/stack/product',
          params: {
            name: 'Nimal',
            age: 25
          }
        }}>Product</Link>
        <Link href={{
          pathname: '/stack/product/[productId]',
          params: { 
            productId: 'dew', 
            name: 'CDRanga',
            city: 'Colombo'
          }
        }}>ID</Link>
      </View>
  )
}
export default Index