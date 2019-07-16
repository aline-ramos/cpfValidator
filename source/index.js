function cpfValidator(cpf) {
  numCpf = 0;
  resto = 0;
  numCpf = 0;
  for (let i = 1; i <= 9; i++) {
    numCpf += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }
  resto = (numCpf * 10) % 11;
  if (resto !== parseInt(cpf.substring(9, 10))) {
    return false;
  }
  numCpf = 0;
  for (let i = 1; i <= 10; i++) {
    numCpf += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }
  resto = (numCpf * 10) % 11;
  return resto === parseInt(cpf.substring(10, 11));
}
module.exports.cpfValidator = cpfValidator;
