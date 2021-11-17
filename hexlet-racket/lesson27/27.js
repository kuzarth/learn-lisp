const charAlphabetic = c => !!c.match(/[a-zA-Z]/);
const charNumeric = c => !!c.match(/\d/);

const charAlphanumeric = c => charAlphabetic(c) || charNumeric(c);

const passwordValid = password =>
  password.length && [...password].every(charAlphanumeric);

const passwordGood = password => {
  const chars = [...password];

  return passwordValid(password) &&
    8 <= chars.length &&
    chars.some(charAlphabetic) &&
    chars.some(charNumeric);
};

module.exports = {
  passwordValid,
  passwordGood,
};
