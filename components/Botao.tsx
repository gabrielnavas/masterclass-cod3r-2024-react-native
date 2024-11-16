import { Button, Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  children: React.ReactNode
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

export default function Botao(props: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        { opacity: pressed ? 0.8 : 1 },
        styles.botao,
        props.style
      ]}
      onPress={props.onPress}>
      {props.children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#3A7EFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  }
})
