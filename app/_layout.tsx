import 'react-native-reanimated';

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Drawer } from 'expo-router/drawer'

import { Ionicons } from '@expo/vector-icons'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="#222F"
          barStyle='default'
          showHideTransition='fade'
          hidden={false}
        />
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer
            screenOptions={{
              swipeEdgeWidth: 100
            }}
          >
            <Drawer.Screen
              name='index'
              options={{
                drawerLabel: 'Início',
                title: 'Bem vindo',
                drawerIcon: () => (
                  <Ionicons
                    name='home-outline'
                    size={18}
                    color='#3a98ff'
                  />
                )
              }}
            />
            <Drawer.Screen
              name='primeiro'
              options={{
                drawerLabel: 'Primeiro',
                title: 'Primeiro Oh Yeha',
                drawerIcon: () => (
                  <Ionicons
                    name='heart-circle-outline'
                    size={18}
                    color='#3a98ff'
                  />
                )
              }}
            />
            <Drawer.Screen
              name='contador'
              options={{
                drawerLabel: 'Contador',
                title: 'Contador',
                drawerIcon: () => (
                  <Ionicons
                    name='add'
                    size={18}
                    color='#3a98ff'
                  />
                )
              }}
            />
            <Drawer.Screen
              name='tabs'
              options={{
                drawerLabel: 'Tabs',
                title: 'Tab Inicial',
                drawerIcon: () => (
                  <Ionicons
                    name='albums-outline'
                    size={18}
                    color='#3a98ff'
                  />
                )
              }}
            />
             <Drawer.Screen
              name='stack'
              options={{
                drawerLabel: 'Stack',
                title: 'Stack Inicial',
                drawerIcon: () => (
                  <Ionicons
                    name='logo-stackoverflow'
                    size={18}
                    color='#3a98ff'
                  />
                )
              }}
            />
          </Drawer>
        </GestureHandlerRootView>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
  },
  buttonsContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,
  },
});