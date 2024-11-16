import styles from "@/constants/styles";
import { useState } from "react";
import { Text, View } from "react-native";
import Botao from "./Botao";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  valorIncial?: number
}

export default function Contador(props: Props) {
  const [numero, setNumero] = useState<number>(
    props.valorIncial
      ? props.valorIncial
      : 0
  )

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 70,
        }}
      >{numero}</Text>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
        }}
      >
        <Botao
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 50
          }}
          onPress={() => setNumero(old => old + 1)}>
          <Ionicons
            name='add'
            size={24}
            color='white' />
        </Botao>
        <Botao
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 50
          }}
          onPress={() => setNumero(old => old - 1)}>
          <Ionicons
            name='remove'
            size={24}
            color='white' />
        </Botao>
      </View>
    </View>
  )
}