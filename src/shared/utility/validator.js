/* eslint-disable no-useless-escape */
const validateEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !re.test(email);
};

const validatePassword = (password) => {
  const re = /^.{6,}$/;
  return !re.test(password);
};

const validatePhoneNumber = (number) => {
  const re = /^\d{10}$/;
  return !re.test(number);
};

const validator = {
  validateEmail,
  validatePassword,
  validatePhoneNumber,
};

export default validator;
