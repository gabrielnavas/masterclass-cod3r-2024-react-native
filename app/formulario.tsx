import Botao from "@/components/Botao";
import styles from "@/constants/styles";
import { useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Formulatio() {
  const [usuario, setUsuario] = useState('')
  const [errors, setErrors] = useState<{ nome: string }>({
    nome: ''
  })

  function salvar() {
    AsyncStorage.setItem('usuario', JSON.stringify(usuario))
  }

  return (
    <View style={styles.container}>
      <Text>Formulário</Text>
      <Text>{usuario}</Text>
      <TextInput
        style={[styles.input, errors.nome && styles.inputError]}
        placeholder="Nome"
        value={usuario || ''}
        onChangeText={v => setUsuario(v)}
      />
      <Botao onPress={salvar}>
        <Text
          style={{ color: 'white', fontWeight: 'bold' }}
        >Salvar</Text>
      </Botao>
    </View>
  )
}