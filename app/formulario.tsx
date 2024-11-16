import Botao from "@/components/Botao";
import styles from "@/constants/styles";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Cpf from "../utils/Cpf";
import useFormUsuario from "@/hooks/useFormUsuario";


export default function Formulario() {
  const {
    errors,
    salvar,
    setUsuario,
    usuario,
    setCpf,
    validarCpf,
    validarNome,
    cpf,
  } = useFormUsuario()

  return (
    <View style={styles.container}>
      <Text>Formulário</Text>
      <Text>{usuario}</Text>
      <TextInput
        style={[styles.input, errors.nome && styles.inputError]}
        placeholder="Nome"
        value={usuario}
        onChangeText={(v) => {
          setUsuario(v);
          validarNome(v);
        }}
      />
      {errors.nome && <Text style={{ color: "red", marginBottom: 2 }}>{errors.nome}</Text>}

      <TextInput
        keyboardType="phone-pad"
        style={[styles.input, errors.cpf && styles.inputError]}
        placeholder="CPF"
        value={Cpf.formatar(cpf)}
        onChangeText={(v) => {
          setCpf(v)
          validarCpf(v);
        }}
      />
      {errors.cpf && <Text style={{ color: "red", marginBottom: 2 }}>{errors.cpf}</Text>}

      <Botao onPress={salvar}>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}>
          Salvar
        </Text>
      </Botao>
    </View>
  );
}
