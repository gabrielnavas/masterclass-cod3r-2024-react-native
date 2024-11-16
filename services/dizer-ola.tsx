import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

export async function dizerOla() {
  try {
    const usuarioJson = await AsyncStorage.getItem('usuario')
    if (usuarioJson !== null) {
      const usuario = JSON.parse(usuarioJson)
      Toast.show({
        type: 'info',
        text1: `Olá ${usuario}`,
        visibilityTime: 3000, // Tempo de exibição em milissegundos
      });
    } else {
      Toast.show({
        type: 'info',
        text1: `Olá Usuário!`,
        visibilityTime: 3000, // Tempo de exibição em milissegundos
      });
    }
  } catch (err) {
    Toast.show({
      type: 'error',
      text1: 'Algo deu errado!!',
      visibilityTime: 3000, // Tempo de exibição em milissegundos
    });
  }
}