import { View } from 'react-native'
import { styles } from './styles'
import TrophySvg from '../../assets/trophy.svg'
import StarsSvg from '../../assets/stars.svg'

export function Stars() {
  return (
    <View style={styles.container}>
      <TrophySvg />
    </View>
  )
}
