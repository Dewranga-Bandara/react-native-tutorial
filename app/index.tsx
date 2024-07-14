import { View, Text } from 'react-native'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View>
      <Text className='text-5xl font-bold text-green-700'>Index</Text>
      <Link href={'/category'}>Category</Link>
      <Link href={'/products'}>Products</Link>
      <Link href={{
        pathname: '/product',
        params: {
          name: 'Nimal',
          age: 25
        }
      }}>Product</Link>
      <Link href={{
        pathname: '/product/[productId]',
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