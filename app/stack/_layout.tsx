import { Stack } from "expo-router";

export default function LayoutStack() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name='index'
        options={{
          title: 'Home'
        }}
      />
       <Stack.Screen 
        name='nova'
        options={{
          title: 'Nova'
        }}
      />
    </Stack>
  )
} 