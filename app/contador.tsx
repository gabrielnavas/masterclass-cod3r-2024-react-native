import Contador from "@/components/Contador";
import styles from "@/constants/styles";
import { Text, View } from "react-native";


export default function TelaContador() {
  return (
    <Contador valorIncial={5} />
  )
}