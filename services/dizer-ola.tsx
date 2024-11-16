import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from "react-native";

export async function dizerOla() {
  try {
    const usuarioJson = await AsyncStorage.getItem('usuario')
    if (usuarioJson !== null) {
      const usuario = JSON.parse(usuarioJson)
      ToastAndroid.show(`Olá ${usuario}`, 3000)
    } else {
      ToastAndroid.show('Olá', 3000)
    }
  } catch (err) {
    ToastAndroid.show('Algo deu errado!!', 3000)
  }
}