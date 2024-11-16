import Botao from '@/components/Botao';
import styles from '@/constants/styles';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect } from 'react'
import { Alert, Text, View } from "react-native";

import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Toast from 'react-native-toast-message'
import { dizerOla } from '@/services/dizer-ola';

export default function TelaInicial() {
  const nav = useNavigation()

  useEffect(() => {
    dizerOla()
  }, [])

  return (
    <View
      style={[
        styles.container,
        { gap: 10 }
      ]}>
      <Ionicons
        name='logo-react'
        size={100}
      />
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 700
        }}>
          Masterclass React Native
        </Text>
        <Text style={{
          fontSize: 16,
        }}>
          Expo router
        </Text>
      </View>
      <Botao
        onPress={
          () => nav.dispatch(DrawerActions.openDrawer())
        }
      >
        <Text
          style={{ color: 'white' }}>
          Execícios
        </Text>
      </Botao>
      <Botao
        onPress={dizerOla}
      >
        <Text
          style={{ color: 'white' }}>
          Dizer olá
        </Text>
      </Botao>
    </View>
  );
}