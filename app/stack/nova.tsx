import Botao from "@/components/Botao";
import styles from "@/constants/styles";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function TelaNova() {
  return (
    <View style={[styles.container, { gap: 10 }]}>
      <Text>Tela nova</Text>
      <Botao>
        <Link
          style={{ color: '#fff' }}
          href='/stack'>
          Voltar
        </Link>
      </Botao>
    </View>
  )
}