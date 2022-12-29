function validateEmail(email) {
  let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

function validatePassword(password) {
  let regex = /^[0-9]+$/;
  return regex.test(Number(password));
}

function validateCheckPassword(password, checkPassword) {
  if (password == checkPassword) return true;
  return false;
}

export { validateEmail, validatePassword, validateCheckPassword };
