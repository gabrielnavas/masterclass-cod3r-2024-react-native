import Botao from "@/components/Botao";
import styles from "@/constants/styles";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function TelaInicial() {
  return (
    <View style={[styles.container, { gap: 10 }]}>
      <Text>Stack inicial</Text>
      <Botao>
        <Link
          style={{ color: '#fff' }}
          href='/stack/nova'>
          Ir para Tela Nova
        </Link>
      </Botao>
    </View>
  )
}