import { Link } from 'expo-router'
import { View, Text } from 'react-native'

const MainIndex = () => {
  return (
    <View>
      <Text>MainIndex</Text>
      <Link href={'/stack'}>Main</Link>
    </View>
  )
}

export default MainIndex