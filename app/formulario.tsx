import Botao from "@/components/Botao";
import styles from "@/constants/styles";
import { useEffect, useState } from "react";
import { Text, ToastAndroid, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Cpf from "../utils/Cpf";

type FormErrors = {
  nome: string,
  cpf: string
}

export default function Formulatio() {
  const [usuario, setUsuario] = useState("");
  const [cpf, setCpf] = useState("");
  const [errors, setErrors] = useState<FormErrors>({
    nome: "",
    cpf: "",
  });

  useEffect(() => {
    AsyncStorage.getItem("usuario").then((usuario) => {
      if (usuario) {
        setUsuario(JSON.parse(usuario));
      }
    });
    AsyncStorage.getItem("cpf").then((cpf) => {
      debugger
      if (cpf) {
        setCpf(JSON.parse(cpf));
      }
    });
  }, []);

  async function salvar() {
    if (validarNome(usuario) && validarCpf(cpf)) {
      await AsyncStorage.setItem("usuario", JSON.stringify(usuario));
      await AsyncStorage.setItem("cpf", JSON.stringify(cpf))
      ToastAndroid.show("Salvo!", 3000);
    } else {
      ToastAndroid.show(errors.nome, 5000);
    }
  }

  function validarNome(valor: string) {
    if (!valor || valor.trim().length < 3) {
      setErrors((prev) => ({
        ...prev,
        nome: "Nome deve ter no mínimo 3 letras",
      }));
      return false;
    }

    setErrors((prev) => ({ ...prev, nome: "" }));
    return true;
  }


  function validarCpf(valor: string) {
    if (!valor || Cpf.desformatar(valor).trim().length < 11) {
      setErrors((prev) => ({
        ...prev,
        cpf: "CPF deve ter 11 números",
      }));
      return false;
    }

    setErrors((prev) => ({ ...prev, cpf: "" }));
    return true;
  }

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
          }}
        >
          Salvar
        </Text>
      </Botao>
    </View>
  );
}
