import Cpf from "@/utils/Cpf";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ToastAndroid } from "react-native";

type FormErrors = {
  nome: string,
  cpf: string
}

export default function useFormUsuario() {
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

  return {
    usuario,
    errors,
    setUsuario,
    cpf,
    setCpf,
    validarCpf,
    validarNome,
    salvar,
  }
}