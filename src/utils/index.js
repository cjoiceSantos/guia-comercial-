
export const validateCNPJ = (cnpj) => {
  cnpj = cnpj.replace(/[^\d]+/g, '');

  if (cnpj === '') {

    return false;
  }

  if (cnpj.length !== 14) {

    return false;
  }

  // Elimina CNPJs invalidos conhecidos
  if ((cnpj === "00000000000000") ||
    (cnpj === "11111111111111") ||
    (cnpj === "22222222222222") ||
    (cnpj === "33333333333333") ||
    (cnpj === "44444444444444") ||
    (cnpj === "55555555555555") ||
    (cnpj === "66666666666666") ||
    (cnpj === "77777777777777") ||
    (cnpj === "88888888888888") ||
    (cnpj === "99999999999999")) {
    return false;
  }

  // Valida DVs
  let tamanho = cnpj.length - 2
  let numeros = cnpj.substring(0, tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
      pos = 9;
  }

  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado !== parseInt(digitos.charAt(0))) {
    return false;
  }

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);

  soma = 0;
  pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
      pos = 9;
  }

  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado !== parseInt(digitos.charAt(1))) {
    return false;
  }

  return true;
}

export const formatPhone = (phone) => {

  if (phone.substring(0, 1) === '0') {
    phone = phone.slice(1)
  }

  if (phone.length === 12) {
    return phone.replace(/(^\d{3})(\d{5})(\d{4})/, "($1) $2-$3")
  }

  if (phone.length === 11) {
    return phone.replace(/(^\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
  }

  if (phone.length === 10) {
    return phone.replace(/(^\d{2})(\d{4})(\d{4})/, "($1) $2-$3")
  }

  if (phone.length === 9) {
    return phone.replace(/(^\d{1})(\d{4})(\d{4})/, "$1 $2-$3")
  }

  return phone.replace(/(^\d{4})(\d{4})/, "$1-$2")
}

export const formatMoney = (money) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(money)
}
