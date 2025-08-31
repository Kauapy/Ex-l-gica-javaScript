function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

document.write(validarEmail("kaua@example.com"))
document.write(validarEmail("kaua@.com"))
document.write(validarEmail("kaua.com"))