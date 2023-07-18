import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';

import { THEME } from '../../styles/theme';
import { styles } from './styles';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const TYPE_COLORS = {
  EASY: THEME.COLORS.BRAND_LIGHT,
  HARD: THEME.COLORS.DANGER_LIGHT,
  MEDIUM: THEME.COLORS.WARNING_LIGHT,
}

type Props = TouchableOpacityProps & {
  title: string;
  isChecked?: boolean;
  type?: keyof typeof TYPE_COLORS;
}

export function Level({ title, type = 'EASY', isChecked = false, ...rest }: Props) {
  const scale = useSharedValue(1)
  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }]
    }
  })

  const COLOR = TYPE_COLORS[type];

  return (
    <TouchableOpacity {...rest}>
      <Animated.View style={
        [
          styles.container,
          animatedContainerStyle,
          { borderColor: COLOR, backgroundColor: isChecked ? COLOR : 'transparent' }
        ]
      }>
        <Text style={
          [
            styles.title,
            { color: isChecked ? THEME.COLORS.GREY_100 : COLOR }
          ]}>
          {title}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
}