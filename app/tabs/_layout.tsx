import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"

type Props = {

}

export default function Layout(props: Props) {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen

        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => (
            <Ionicons
              name='home-outline'
              size={18}
              color='#884499'
            />
          )
        }}
      />
    </Tabs>
  )
}