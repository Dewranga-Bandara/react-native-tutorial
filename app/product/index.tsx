import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

const Product = () => {
    const params = useLocalSearchParams()
    console.log(params)
    
  return (
    <View>
      <Text>Product</Text>
    </View>
  )
}

export default Product