export default class Cpf {
  static formatar(cpf: string): string {
    if (cpf.length > 14) {
      return cpf.substring(0, 14);
    }
    let value = cpf.replace(/\D/g, ""); // Remove caracteres não numéricos
    value = value.replace(/(\d{3})(\d)/, "$1.$2"); // Adiciona o primeiro ponto
    value = value.replace(/(\d{3})(\d)/, "$1.$2"); // Adiciona o segundo ponto
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Adiciona o traço
    return value
  }

  static desformatar(cpf: string): string {
    return cpf.replaceAll('-', '').replaceAll('.', '')
  }
}